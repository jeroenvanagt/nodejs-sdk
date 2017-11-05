import { Observable } from 'rxjs/Observable';
import { Paymentmethod } from './result/paymentmethod';
export declare class Paymentmethods {
    private static reorderGetServiceData(data);
    static getList(): Observable<Paymentmethod>;
}
