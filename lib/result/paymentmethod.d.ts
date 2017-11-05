export declare class Paymentmethod {
    /**
     * The id of the payment method.
     */
    id: number;
    /**
     * The name of the payment method
     */
    name: string;
    /**
     * The name of the payment method.
     * Generally this more descriptive than the name
     */
    visibleName: string;
    /**
     * If the payment method has banks, they are listed here (iDEAL)
     */
    banks?: Bank[];
    /**
     * The countries where the payment method is used.
     */
    countries: Country[];
    constructor(data: any);
}
export declare class Bank {
    /**
     * the bank id
     */
    id: number;
    /**
     * The name of the bank
     */
    name: string;
    /**
     * The name of the bank
     */
    visibleName: string;
    /**
     * The url to the image of this bank
     */
    img: string;
    available: boolean;
    constructor(data: any);
}
export declare class Country {
    code: string;
    name: string;
    constructor(data: any);
}
