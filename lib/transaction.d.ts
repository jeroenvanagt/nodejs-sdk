import { StartResult } from './result/transaction/start';
import { TransactionResult } from './result/transaction';
import { TransactionStart } from './datatypes/transaction-start';
import { Refund } from './datatypes/refund';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export declare class Transaction {
    static version: number;
    static start(options: TransactionStart): Observable<StartResult>;
    static get(transactionId: string): Observable<TransactionResult>;
    static approve(transactionId: any): Observable<boolean>;
    static decline(transactionId: any): Observable<boolean>;
    static refund(options: Refund): Observable<string>;
}
