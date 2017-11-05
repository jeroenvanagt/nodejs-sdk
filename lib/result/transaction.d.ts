import { Observable } from 'rxjs/Observable';
import { Address, InvoiceAddress } from '../datatypes/address';
export declare class TransactionResult {
    transactionId: string;
    connection: Connection;
    enduser: Enduser;
    saleData: SaleData;
    paymentDetails: PaymentDetails;
    statsDetails: StatsDetails;
    constructor(data: any);
    isPaid(): boolean;
    isPending(): boolean;
    isCanceled(): boolean;
    isRefunded(alsoPartial: boolean): boolean;
    isPartiallyRefunded(): boolean;
    isBeingVerified(): boolean;
    approve(): Observable<boolean>;
    decline(): Observable<boolean>;
    refund(options?: ResultRefund): Observable<string>;
}
export declare class ResultRefund {
    amount?: number;
    description?: string;
    processDate?: Date;
}
export declare class Connection {
    trust: number;
    country?: string;
    city?: string;
    locationLat?: string;
    locationLon?: string;
    browserData?: string;
    ipAddress?: string;
    blacklist?: number;
    host?: string;
    orderIpAddress?: string;
    orderReturnURL?: string;
    merchantCode?: string;
    merchantName?: string;
    constructor(data: any);
}
export declare class Enduser {
    accessCode?: string;
    language?: string;
    initials?: string;
    lastName?: string;
    gender?: string;
    dob?: string;
    phoneNumber?: string;
    emailAddress?: string;
    bankaccount?: string;
    iban?: string;
    bic?: string;
    sendConfirmMail?: string;
    confirmMailTemplate?: string;
    address?: Address;
    invoiceAddress?: InvoiceAddress;
    constructor(data: any);
}
export declare class SaleData {
    invoiceDate?: Date;
    deliveryDate?: Date;
    orderData?: OrderDataRow[];
    constructor(data: any);
}
export declare class OrderDataRow {
    productId: number;
    description: string;
    price: number;
    quantity: number;
    vatCode: string;
    constructor(data: any);
}
export declare class PaymentDetails {
    amount: number;
    currencyAmount: number;
    paidAmount: number;
    paidCurrenyAmount: number;
    paidBase: number;
    paidCosts?: number;
    paidCostsVat?: number;
    paidCurreny: string;
    paidAttemps: number;
    paidDuration?: any;
    description: any;
    processTime: any;
    state: number;
    stateName: string;
    exchange: number;
    storno?: number;
    paymentOptionId: number;
    paymentOptionSubId: number;
    secure?: number;
    secureStatus?: string;
    identifierName: string;
    identifierPublic: string;
    identifierHash: string;
    serviceId: string;
    serviceName: string;
    serviceDescription: string;
    created: string;
    modified: string;
    paymentMethodId: number;
    paymentMethodName: string;
    paymentMethodDescription: string;
    paymentProfileName: string;
    constructor(data: any);
}
export declare class StatsDetails {
    paymentSessionId?: number;
    tool?: string;
    info?: string;
    promotorId?: number;
    extra1?: string;
    extra2?: string;
    extra3?: string;
    transferData?: string;
    object?: string;
    constructor(data: any);
}
