export declare class Address {
    streetName?: string;
    houseNumber?: string;
    zipCode?: string;
    city?: string;
    countryCode?: string;
}
export declare class InvoiceAddress extends Address {
    initials?: string;
    lastName?: string;
    gender?: string;
}
