export declare class StartResult {
    /**
     * The id of the transaction
     */
    transactionId: string;
    /**
     * The url to redirect the user to to complete the payment
     */
    paymentURL: string;
    popupAllowed: boolean;
    paymentReference: string;
    constructor(data: any);
}
