<h1 align="center">FR3VELORA</h1>

<p align="center">
  <b>Library WhatsApp Web berbasis WebSocket untuk Node.js</b><br/>
  Fork dari <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a> dengan tambahan pesan interaktif, dukungan TypeScript, dan tanpa auto-follow channel.
</p>

<p align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <img alt="Node" src="https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg">
  <img alt="Module" src="https://img.shields.io/badge/module-ESM-orange.svg">
  <img alt="TypeScript" src="https://img.shields.io/badge/types-included-3178c6.svg">
  <a href="https://github.com/fr3velora/Baileys"><img alt="GitHub" src="https://img.shields.io/badge/source-GitHub-black.svg"></a>
</p>

<p align="center">
  <a href="#-mulai-cepat">Mulai Cepat</a> ·
  <a href="#-menghubungkan-akun">Koneksi</a> ·
  <a href="#-event">Event</a> ·
  <a href="#-mengirim-pesan">Kirim Pesan</a> ·
  <a href="#-grup--komunitas">Grup</a> ·
  <a href="#-channel-newsletter">Channel</a> ·
  <a href="#-typescript">TypeScript</a> ·
  <a href="#-pemecahan-masalah">Masalah Umum</a>
</p>

---

## Ringkasan

| | |
|---|---|
| **Paket** | `@fr3velora/baileys` |
| **Node.js** | 20 atau lebih baru (disarankan 22+) |
| **Format modul** | ESM (`"type": "module"`) |
| **Tipe TypeScript** | Sudah disertakan di `lib/index.d.ts` |
| **Instalasi** | Dari GitHub, tidak lewat npm registry |
| **Lisensi** | MIT |

**Yang ada di fork ini**

- Pesan interaktif: tombol, daftar, tabel, code block, LaTeX, order, product, hasil polling, dan kuis.
- Helper singkat: `sendText`, `sendImage`, `sendVideo`, `sendAudio`, `sendLocation`, `sendPoll`, `sendQuiz`.
- Opsi `noSelfSync` untuk mengirim tanpa menyinkronkan ke perangkat lain milik akun sendiri.
- Label AI pada pesan lewat opsi `aiLabel`.
- Pairing code, grup, komunitas, channel, bisnis, dan username.
- **Tidak ada auto-follow channel.** Bot hanya mengikuti channel kalau kamu memanggil `newsletterFollow` sendiri.

---

## 🚀 Mulai Cepat

### 1. Instal

```bash
npm install github:fr3velora/Baileys
```

Atau tambahkan manual ke `package.json`:

```json
{
  "dependencies": {
    "@fr3velora/baileys": "github:fr3velora/Baileys"
  }
}
```

Pin ke branch atau commit tertentu:

```bash
npm install github:fr3velora/Baileys#main
```

<details>
<summary><b>Sudah punya bot yang memakai <code>@whiskeysockets/baileys</code>?</b></summary>

Tidak perlu mengubah semua `import`. Arahkan nama paket lama ke fork ini:

```json
{
  "dependencies": {
    "@whiskeysockets/baileys": "github:fr3velora/Baileys"
  }
}
```

Kode lama yang memakai `@whiskeysockets/baileys` akan otomatis memakai fork ini.

</details>

### 2. Bot minimal

Simpan sebagai `bot.mjs`, atau pakai `"type": "module"` di `package.json` bot kamu.

```javascript
import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestWaWebVersion,
  DisconnectReason,
  Browsers
} from '@fr3velora/baileys';

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('session');
  const { version } = await fetchLatestWaWebVersion();

  const client = makeWASocket({
    version,
    auth: state,
    browser: Browsers.fr3velora('Chrome')
  });

  client.ev.on('creds.update', saveCreds);

  client.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) console.log('QR tersedia, tampilkan sendiri (lihat bagian Koneksi).');

    if (connection === 'open') console.log('Terhubung sebagai', client.user?.id);

    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      if (code !== DisconnectReason.loggedOut) start(); // sambungkan ulang
      else console.log('Sesi keluar. Hapus folder session lalu login ulang.');
    }
  });

  client.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m?.message || m.key.fromMe) return;

    const jid = m.key.remoteJid;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || '';

    if (text === 'ping') {
      await client.sendMessage(jid, { text: 'pong' }, { quoted: m });
    }
  });
}

start();
```

> [!NOTE]
> Paket ini **ESM-only**. Kalau bot kamu CommonJS, pakai `const baileys = await import('@fr3velora/baileys')` di dalam fungsi `async`. `require()` langsung hanya jalan di Node 22 ke atas (atau 20.19+).

---

## 🔌 Menghubungkan Akun

### Dengan pairing code (tanpa scan QR)

Library menyediakan `requestPairingCode(nomor)`, tapi **tidak** menanyakan nomor sendiri. Alur "user ketik nomor di terminal, lalu kode muncul" dibuat di kode bot. Contoh siap pakai:

```javascript
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const client = makeWASocket({
  version,
  auth: state,
  browser: Browsers.fr3velora('Chrome')
});

// Hanya saat akun belum pernah login
if (!client.authState.creds.registered) {
  const rl = readline.createInterface({ input, output });
  const number = (await rl.question('Masukkan nomor WhatsApp (contoh 628123456789): '))
    .replace(/\D/g, ''); // buang +, spasi, dan tanda lain
  rl.close();

  const code = await client.requestPairingCode(number);
  // atau kode buatan sendiri (tepat 8 karakter): requestPairingCode(number, 'ABCD1234')
  console.log('Kode pairing kamu:', code?.match(/.{1,4}/g)?.join('-') ?? code);
}
```

Jalankan bot, ketik nomor, lalu kode muncul di terminal. Kalau kode tidak terbit atau langsung ditolak, tunggu sampai event `connection.update` melaporkan `connecting` sebelum memanggil `requestPairingCode`.

Di HP: **WhatsApp → Perangkat tertaut → Tautkan perangkat → Tautkan dengan nomor telepon**, lalu masukkan kodenya.

### Dengan QR code

> [!WARNING]
> Opsi `printQRInTerminal` sudah **deprecated**. QR tidak lagi dicetak otomatis. Tangkap sendiri dari event `connection.update`.

```javascript
import qrcode from 'qrcode-terminal'; // npm install qrcode-terminal

client.ev.on('connection.update', ({ qr }) => {
  if (qr) qrcode.generate(qr, { small: true });
});
```

### Pilihan koneksi yang sering dipakai

| Opsi | Fungsi |
|---|---|
| `version` | Versi WhatsApp Web. Ambil dengan `fetchLatestWaWebVersion()` atau `fetchLatestBaileysVersion()`. |
| `auth` | State dari `useMultiFileAuthState`. |
| `browser` | Identitas perangkat, misalnya `Browsers.fr3velora('Chrome')`, `Browsers.ubuntu('Chrome')`, `Browsers.macOS('Safari')`. |
| `markOnlineOnConnect` | `false` agar akun tidak otomatis tampil online. |
| `aiLabel` | `true` untuk menampilkan label AI pada pesan yang dikirim bot. |
| `logger` | Instans `pino`. Pakai `pino({ level: 'silent' })` untuk membisukan log. |

### Menyimpan sesi

`useMultiFileAuthState('session')` menyimpan kredensial di folder `session/`. Folder itu **berisi kunci akunmu**, jadi jangan di-commit ke Git dan jangan dibagikan. Folder `session*/` sudah ada di `.gitignore`.

Untuk bot skala besar, simpan kredensial di database dan bungkus key store dengan `makeCacheableSignalKeyStore(keys, logger)` agar pembacaan kunci di-cache.

---

## 📡 Event

Semua event diterima lewat `client.ev.on(nama, handler)`.

| Event | Kapan muncul |
|---|---|
| `connection.update` | Status koneksi berubah (`connecting`, `open`, `close`) atau QR baru tersedia. |
| `creds.update` | Kredensial berubah. **Wajib** disimpan dengan `saveCreds`. |
| `messages.upsert` | Pesan baru masuk atau terkirim. |
| `messages.update` | Status pesan berubah (terkirim, dibaca, diedit, dihapus). |
| `messages.reaction` | Ada reaksi pada pesan. |
| `message-receipt.update` | Info baca dan terima per penerima. |
| `presence.update` | Status mengetik atau online. |
| `chats.upsert`, `chats.update`, `chats.delete` | Perubahan daftar chat. |
| `contacts.upsert`, `contacts.update` | Perubahan kontak. |
| `groups.upsert`, `groups.update` | Perubahan grup. |
| `group-participants.update` | Anggota grup bertambah, keluar, atau berubah peran. |
| `call` | Panggilan masuk. |

> Daftar event lengkap ada di `lib/Types/Events.js`. Untuk menangani banyak event sekaligus, pakai `client.ev.process(async (events) => { ... })`.

---

## 💬 Mengirim Pesan

Semua method memakai `jid` tujuan:

| Jenis | Format JID |
|---|---|
| Pribadi | `628123456789@s.whatsapp.net` |
| Grup | `1203630xxxxxxxxxx@g.us` |
| Channel | `1203630xxxxxxxxxx@newsletter` |
| Status | `status@broadcast` |

### Pesan dasar

```javascript
// Teks
await client.sendMessage(jid, { text: 'Halo!' });

// Membalas (quote) pesan
await client.sendMessage(jid, { text: 'Balasan' }, { quoted: m });

// Mention
await client.sendMessage(jid, {
  text: '@628123456789 halo',
  mentions: ['628123456789@s.whatsapp.net']
});

// Gambar, video, audio, dokumen
await client.sendMessage(jid, { image: { url: './foto.jpg' }, caption: 'Keterangan' });
await client.sendMessage(jid, { video: { url: './video.mp4' }, caption: 'Keterangan' });
await client.sendMessage(jid, { audio: { url: './suara.mp3' }, mimetype: 'audio/mp4' });
await client.sendMessage(jid, {
  document: { url: './berkas.pdf' },
  mimetype: 'application/pdf',
  fileName: 'berkas.pdf'
});
```

### Opsi `noSelfSync`

`noSelfSync` adalah opsi `relayMessage` dan `sendMessage` (hanya chat pribadi 1-on-1). Opsi ini menentukan apakah pesan juga disinkronkan ke **perangkat lain milik akunmu sendiri**. Pengiriman ke penerima tidak terpengaruh.

| Nilai | Efek |
|---|---|
| `true` | Pesan sampai ke penerima, tapi tidak muncul di perangkat tertaut lainnya. Cocok untuk bot yang mengirim otomatis. |
| `false` (bawaan) | Pesan juga muncul di semua perangkatmu, seperti mengirim dari aplikasi resmi. |

```javascript
await client.sendMessage(jid, { text: 'Halo dari Fr3velora' }, { noSelfSync: true });

await client.relayMessage(jid, { conversation: 'Halo dari Fr3velora' }, { noSelfSync: true });
```

### Helper singkat

Semua helper menerima `options` (misalnya `contextInfo`) dan `quoted` sebagai argumen terakhir.

| Method | Signature |
|---|---|
| `sendText` | `(jid, text, options?, quoted?)` |
| `sendImage` | `(jid, image, caption, options?, quoted?)` |
| `sendVideo` | `(jid, video, caption, options?, quoted?)` |
| `sendAudio` | `(jid, audio, options?, quoted?)` |
| `sendLocation` | `(jid, name, degreesLongitude, degreesLatitude, url, address, options?, quoted?)` |
| `sendPoll` | `(jid, name, values[], multiSelect, options?, quoted?)` |
| `sendQuiz` | `(jid, name, values[], jawabanBenar, options?, quoted?)` |
| `sendPtv` | `(jid, ptv, options?, quoted?)` |
| `statusMention` | `(jid, content)` |

```javascript
await client.sendText(jid, 'Halo!', { contextInfo: { mentionedJid: [jid] } });

await client.sendImage(jid, { url: './foto.jpg' }, 'Keterangan');

await client.sendPoll(jid, 'Pilih satu', ['A', 'B', 'C'], false);

await client.sendQuiz(jid, 'Ibu kota Indonesia?', ['Jakarta', 'Bandung', 'Medan'], 'Jakarta');

await client.sendLocation(jid, 'Monas', 106.8272, -6.1754, 'https://example.com', 'Jakarta');

await client.statusMention(jid, { extendedTextMessage: { text: 'Menyebut kamu di status' } });
```

> [!NOTE]
> Perhatikan urutan `sendLocation`: **longitude dulu, baru latitude**.

### Pesan kaya

Method di bawah mengirim pesan terformat. Parameter `quoted` bisa diisi `null` atau pesan yang dibalas.

| Method | Signature |
|---|---|
| `sendList` | `(jid, title, items, quoted?, options?)` |
| `sendTable` | `(jid, title, headers, rows, quoted?, options?)` |
| `sendCodeBlock` | `(jid, code, quoted?, options?)` |
| `sendLatex` | `(jid, quoted, options)` |
| `sendLatexImage` | `(jid, quoted, options, renderLatexToPng, uploadFn)` |
| `sendLatexInlineImage` | `(jid, quoted, options, renderLatexToPng, uploadFn)` |
| `sendRichMessage` | `(jid, submessages, quoted?, options?)` |
| `captureUnifiedResponse` / `sendUnifiedResponse` | `(msg)` / `(jid, quoted, captured, options?)` |

Method ini mengembalikan `{ message, messageId }`. Format isi `items`, `rows`, dan `options` mengikuti generator di `lib/Utils/message-composer.js`. Baca file itu untuk bentuk datanya sebelum dipakai.

### Pesan interaktif

<details>
<summary><b>Interactive message (tombol)</b></summary>

```javascript
await client.sendMessage(jid, {
  image: { url: './foto.jpg' },
  text: 'Isi pesan',
  title: 'Judul',          // wajib saat mengirim media
  footer: 'Footer',
  interactiveButtons: [
    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'Buka',
        url: 'https://example.com'
      })
    }
  ]
});
```

Parameter tambahan seperti `bottom_sheet` dikirim lewat `messageParams`:

```javascript
messageParams: JSON.stringify({ bottom_sheet: { /* parameter lain */ } })
```

</details>

<details>
<summary><b>Order message</b></summary>

```javascript
import fs from 'node:fs';

await client.sendMessage(jid, {
  thumbnail: fs.readFileSync('./thumb.jpg'),
  message: 'Ringkasan pesanan',
  orderTitle: 'Toko Saya',
  totalAmount1000: 72502,
  totalCurrencyCode: 'IDR'
}, { quoted: m });
```

</details>

<details>
<summary><b>Product message</b></summary>

```javascript
await client.relayMessage(jid, {
  productMessage: {
    title: 'Produk.pdf',
    description: 'Deskripsi produk',
    thumbnail: { url: './thumb.jpg' },
    productId: 'ID_PRODUK',
    retailerId: 'ID_PENJUAL',
    url: 'https://example.com',
    body: 'Isi pesan',
    footer: 'Footer',
    buttons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({ display_text: 'Kunjungi', url: 'https://example.com' })
      }
    ],
    priceAmount1000: 72502,
    currencyCode: 'IDR'
  }
});
```

</details>

<details>
<summary><b>Poll result snapshot</b></summary>

```javascript
await client.sendMessage(jid, {
  pollResultMessage: {
    name: 'Polling Saya',
    options: [{ optionName: 'Opsi 1' }, { optionName: 'Opsi 2' }],
    newsletter: {
      newsletterName: 'Nama Channel',
      newsletterJid: '1203630xxxxxxxxxx@newsletter'
    }
  }
});
```

Isi `newsletterJid` dengan JID channel milikmu sendiri. Nilai ini hanya menjadi label "diteruskan dari channel" pada pesan, tidak membuat bot mengikuti channel.

</details>

<details>
<summary><b>Label anggota grup</b></summary>

```javascript
await client.sendMessage(groupJid, {
  groupLabel: { labelText: 'Label anggota' }
});

// atau langsung ubah label sendiri (maksimal 30 karakter)
await client.updateMemberLabel(groupJid, 'Admin Bot');
```

</details>

<details>
<summary><b>Kirim ke anggota grup</b></summary>

```javascript
await client.sendMessageMembers(groupJid, {
  extendedTextMessage: { text: 'Halo semua anggota' }
}, {});
```

</details>

### Membaca dan mengunduh media

```javascript
import { downloadMediaMessage } from '@fr3velora/baileys';

const buffer = await downloadMediaMessage(m, 'buffer', {});
fs.writeFileSync('./hasil.jpg', buffer);

await client.readMessages([m.key]);                       // tandai dibaca
await client.sendPresenceUpdate('composing', jid);        // "sedang mengetik"
```

---

## 👥 Grup & Komunitas

### Grup

| Method | Fungsi |
|---|---|
| `groupCreate(subject, participants)` | Membuat grup. |
| `groupMetadata(jid)` | Info grup dan daftar anggota. |
| `groupParticipantsUpdate(jid, participants, action)` | `action`: `'add'`, `'remove'`, `'promote'`, `'demote'`. |
| `groupUpdateSubject(jid, subject)` | Ganti nama grup. |
| `groupUpdateDescription(jid, description)` | Ganti deskripsi. |
| `groupSettingUpdate(jid, setting)` | `'announcement'`, `'not_announcement'`, `'locked'`, `'unlocked'`. |
| `groupToggleEphemeral(jid, detik)` | Pesan sementara. `0` untuk mematikan. |
| `groupMemberAddMode(jid, mode)` | Siapa yang boleh menambah anggota. |
| `groupJoinApprovalMode(jid, mode)` | Persetujuan admin untuk anggota baru. |
| `groupRequestParticipantsList(jid)` | Daftar permintaan bergabung. |
| `groupRequestParticipantsUpdate(jid, participants, action)` | Setujui atau tolak permintaan. |
| `groupInviteCode(jid)` / `groupRevokeInvite(jid)` | Ambil atau cabut link undangan. |
| `groupAcceptInvite(code)` / `groupGetInviteInfo(code)` | Gabung atau lihat info dari kode undangan. |
| `groupLeave(jid)` | Keluar dari grup. |

```javascript
const meta = await client.groupMetadata(groupJid);
console.log(meta.subject, meta.participants.length);

await client.groupParticipantsUpdate(groupJid, ['628123456789@s.whatsapp.net'], 'promote');
await client.groupSettingUpdate(groupJid, 'announcement'); // hanya admin yang bisa kirim pesan
```

### Komunitas

Method komunitas memakai awalan `community`: `communityCreate`, `communityMetadata`, `communityCreateGroup`, `communityLinkGroup`, `communityUnlinkGroup`, `communityFetchLinkedGroups`, `communityParticipantsUpdate`, `communityInviteCode`, `communityAcceptInvite`, `communityLeave`, `communityUpdateSubject`, `communityUpdateDescription`, dan lainnya. Cara pakainya mirip method grup.

---

## 📢 Channel (Newsletter)

> [!IMPORTANT]
> Fork ini **tidak** mengikuti channel apa pun secara otomatis. Semua aksi channel hanya berjalan kalau kamu memanggilnya sendiri.

```javascript
await client.newsletterFollow('1203630xxxxxxxxxx@newsletter');
await client.newsletterUnfollow('1203630xxxxxxxxxx@newsletter');
await client.newsletterMute(jid);
await client.newsletterUnmute(jid);
```

| Method | Fungsi |
|---|---|
| `newsletterCreate(name, description, picture)` | Membuat channel. |
| `newsletterMetadata(type, key, role)` | Info channel (`type`: `'invite'` atau `'jid'`). |
| `newsletterFetchMessages(type, key, count, after)` | Mengambil pesan channel. |
| `newsletterReactMessage(jid, serverId, code)` | Memberi reaksi pada pesan channel. |
| `newsletterUpdateName` / `newsletterUpdateDescription` / `newsletterUpdatePicture` | Mengubah profil channel. |
| `newsletterDelete(jid)` | Menghapus channel. |
| `subscribeNewsletterUpdates(jid)` | Berlangganan pembaruan langsung. |

---

## 👤 Profil, Privasi, dan Kontak

| Method | Fungsi |
|---|---|
| `profilePictureUrl(jid, 'image')` | URL foto profil. |
| `updateProfilePicture(jid, { url })` | Ganti foto profil. |
| `updateProfileName(name)` / `updateProfileStatus(status)` | Ganti nama dan bio. |
| `fetchStatus(jid)` | Ambil bio kontak. |
| `fetchBlocklist()` / `updateBlockStatus(jid, 'block' \| 'unblock')` | Daftar blokir dan blokir kontak. |
| `fetchPrivacySettings()` | Pengaturan privasi saat ini. |
| `updateLastSeenPrivacy`, `updateOnlinePrivacy`, `updateProfilePicturePrivacy`, `updateStatusPrivacy`, `updateReadReceiptsPrivacy`, `updateGroupsAddPrivacy`, `updateMessagesPrivacy`, `updateCallPrivacy` | Atur privasi. |
| `presenceSubscribe(jid)` | Pantau status online kontak. |
| `chatModify(modification, jid)` | Arsip, bisukan, hapus, atau sematkan chat. |

### Bisnis dan username

- **Bisnis:** `getCatalog`, `getCollections`, `getOrderDetails`, `productCreate`, `productUpdate`, `productDelete`, `getBusinessProfile`.
- **Username:** `checkUsername`, `setUsername`, `getMyUsername`, `deleteUsername`, `findUserByUsername`, `getUsernameRecommendations`.

---

## 🗄️ Store

Store bawaan menyimpan chat, kontak, dan pesan di memori.

```javascript
import pino from 'pino';
import { makeInMemoryStore } from '@fr3velora/baileys';

const store = makeInMemoryStore({
  logger: pino().child({ level: 'silent', stream: 'store' })
});

store.bind(client.ev);

client.ev.on('contacts.upsert', () => {
  console.log('Jumlah kontak:', Object.keys(store.contacts).length);
});
```

> [!NOTE]
> Store ini hanya di memori dan hilang saat bot berhenti. Untuk produksi, simpan data penting ke database sendiri.

---

## 🧰 Fungsi Utilitas

| Fungsi | Kegunaan |
|---|---|
| `jidNormalizedUser(jid)` | Menormalkan JID (membuang device dan agent). |
| `jidDecode(jid)` / `jidEncode(user, server)` | Membongkar dan menyusun JID. |
| `areJidsSameUser(a, b)` | Membandingkan dua JID milik user yang sama. |
| `isJidGroup`, `isJidNewsletter`, `isLidUser` | Mengecek jenis JID. |
| `getContentType(message)` | Jenis isi pesan (`conversation`, `imageMessage`, dll). |
| `extractMessageContent`, `normalizeMessageContent` | Membuka pesan yang terbungkus (ephemeral, view-once). |
| `generateWAMessageFromContent(jid, content, options)` | Membuat pesan dari konten mentah. |
| `downloadMediaMessage`, `downloadContentFromMessage` | Mengunduh media. |
| `delay(ms)` | Menunggu sekian milidetik. |
| `generateMessageID()` | Membuat ID pesan baru. |
| `fetchLatestWaWebVersion()`, `fetchLatestBaileysVersion()` | Mengambil versi terbaru. |

---

## 🟦 TypeScript

Tipe disertakan di paket, jadi tidak perlu memasang `@types` tambahan.

```typescript
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  Browsers,
  type WASocket,
  type WAMessage
} from '@fr3velora/baileys';
import type { Boom } from '@hapi/boom';

async function start(): Promise<WASocket> {
  const { state, saveCreds } = await useMultiFileAuthState('session');

  const client: WASocket = makeWASocket({
    auth: state,
    browser: Browsers.fr3velora('Chrome')
  });

  client.ev.on('creds.update', saveCreds);

  client.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    const code = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode;
    if (connection === 'close' && code !== DisconnectReason.loggedOut) void start();
  });

  client.ev.on('messages.upsert', async ({ messages }) => {
    const m: WAMessage = messages[0];
    await client.sendMessage(m.key.remoteJid!, { text: 'Halo!' }, { quoted: m });
  });

  return client;
}
```

**`tsconfig.json` yang disarankan**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true
  }
}
```

> [!NOTE]
> Tipe `WASocket` sengaja dibuat longgar: semua method socket bisa dipanggil tanpa error kompilasi, tapi parameternya kebanyakan bertipe `any`. Artinya salah ketik nama method baru ketahuan saat bot dijalankan, bukan saat kompilasi.

---

## 🛠️ Pemecahan Masalah

<details>
<summary><b><code>ERR_REQUIRE_ESM</code> atau <code>require is not defined</code></b></summary>

Paket ini ESM-only. Pilih salah satu:

- Tambahkan `"type": "module"` di `package.json` bot dan pakai `import`.
- Atau di CommonJS: `const baileys = await import('@fr3velora/baileys')`.
- Atau pakai Node 22+.

</details>

<details>
<summary><b>TypeScript: error TS1479 saat memakai <code>module: Node16</code></b></summary>

Proyek CommonJS tidak bisa meng-`import` paket ESM dengan `module: Node16`. Ubah ke `"module": "NodeNext"`, jadikan proyek ESM (`"type": "module"`), atau pakai file `.mts`.

</details>

<details>
<summary><b>Tidak ada QR yang muncul</b></summary>

`printQRInTerminal` sudah deprecated. Tangkap `qr` dari `connection.update` seperti di bagian [Koneksi](#-menghubungkan-akun), atau pakai pairing code.

</details>

<details>
<summary><b>Terus terputus dengan kode 401 (<code>loggedOut</code>)</b></summary>

Sesi dicabut dari HP atau sudah tidak valid. Hapus folder `session/` lalu login ulang. Jangan menyambung ulang otomatis untuk kode ini, karena akan berulang tanpa henti.

</details>

<details>
<summary><b><code>fetchLatestWAWebVersion is not a function</code></b></summary>

Nama yang benar memakai huruf kecil pada "a": **`fetchLatestWaWebVersion`**.

</details>

<details>
<summary><b>Gagal saat <code>npm install</code></b></summary>

Salah satu dependency (`libsignal`) diambil dari GitHub. Pastikan `git` terpasang dan koneksi ke GitHub tidak diblokir. Node harus 20 ke atas, karena `preinstall` akan menolak versi di bawahnya.

</details>

---

## Kredit

Fr3velora adalah fork dari [Baileys](https://github.com/WhiskeySockets/Baileys), yang dibuat oleh [Adhiraj Singh](https://github.com/adiwajshing) dan dikelola komunitas WhiskeySockets. Seluruh implementasi protokol dasar adalah hasil kerja penulis dan kontributor aslinya. Teks lisensi dan hak cipta lengkap ada di [LICENSE](LICENSE).

## Disclaimer

Ini **bukan** produk resmi WhatsApp dan tidak berafiliasi dengan WhatsApp atau Meta. Mengirim pesan massal atau tidak diminta dapat melanggar Ketentuan Layanan WhatsApp dan berisiko membuat nomormu diblokir. Gunakan dengan bijak dan tanggung jawab sendiri.
