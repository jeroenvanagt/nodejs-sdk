export declare class Config {
    private static apiToken;
    private static serviceId;
    private static baseUrl;
    static setApiToken(apiToken: string): void;
    static getApiToken(): string;
    static setServiceId(serviceId: string): void;
    static getServiceId(): string;
    static setBaseUrl(baseUrl: string): void;
    static getBaseUrl(): string;
}
