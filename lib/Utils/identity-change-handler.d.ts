export declare function handleIdentityChange(node: any, ctx: any): Promise<{
    action: string;
    device?: undefined;
    error?: undefined;
} | {
    action: string;
    device: number;
    error?: undefined;
} | {
    device?: undefined;
    action: string;
    error: unknown;
}>;
