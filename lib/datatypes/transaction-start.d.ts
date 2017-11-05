import { Address, InvoiceAddress } from './address';
export declare class Product {
    /**
     * Your is of the product
     */
    id: string;
    /**
     * The name of the product
     */
    name: string;
    /**
     * The price of the product
     */
    price: number;
    /**
     * the amount of vat for this product
     */
    tax: number;
    /**
     * The quantity of this product in the order
     */
    qty: number;
}
export declare class Enduser {
    initials?: string;
    lastName?: string;
    gender?: string;
    dob?: Date;
    phoneNumber?: string;
    emailAddress?: string;
}
export declare class TransactionStart {
    /**
     * The total amount for this order
     */
    amount: number;
    /**
     * The return url, we will redirect the user to this url after payment and cancellation
     */
    returnUrl: string;
    /**
     * The ipaddress of the user, we use this for fraud checks.
     * If you dont have an ip, like when you are generating payment links, use 10.20.30.40
     */
    ipAddress: string;
    /**
     * 3-letter ISO-4217 Code for the currency
     */
    currency?: string;
    /**
     * The time until when the payment link is valid
     */
    expireDate?: Date;
    /**
     * Also known as IPN or webHook
     * We call this url when the status of the transaction changes
     */
    exchangeUrl?: string;
    /**
     * The id of the paymentmethod.
     * Use PaymentMethods.getList() to retrieve the available paymentmethods
     */
    paymentMethodId?: number;
    /**
     * The id of the bank, only for iDEAL
     */
    bankId?: number;
    /**
     * The description of the transaction.
     */
    description?: string;
    /**
     * The number belonging to the order
     */
    orderNumber?: string;
    /**
     * Set to true if you want to do a sandbox transaction
     */
    testMode?: boolean;
    /**
     * 2-Letter language code
     */
    language?: string;
    /**
     * Free value
     */
    extra1?: string;
    /**
     * Free value
     */
    extra2?: string;
    /**
     * Free value
     */
    extra3?: string;
    /**
     * The invoiceDate
     */
    invoiceDate?: Date;
    /**
     * The delivery date
     */
    deliveryDate?: Date;
    /**
     * If the transaction is an order, supply the products here
     */
    products?: Product[];
    /**
     * The customer
     */
    enduser?: Enduser;
    /**
     * The shipping address
     */
    address?: Address;
    /**
     * The invoice address
     */
    invoiceAddress?: InvoiceAddress;
}
export declare class TransactionStartClass extends TransactionStart {
    constructor(data: TransactionStart);
    private formatDate(date);
    private formatDateTime(date);
    private calculateVatCode(priceIncl, vatAmount);
    getForApi(): {};
}
