export declare class Refund {
    transactionId: string;
    /**
     * The amount to refund
     */
    amount?: number;
    /**
     * The description to include with the payment
     */
    description?: string;
    /**
     * 	The date on which the refund needs to be processed
     */
    processDate?: Date;
}
export declare class RefundClass extends Refund {
    constructor(data: Refund);
    getForApi(): {
        transactionId: string;
    };
}
