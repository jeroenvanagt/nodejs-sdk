import { Observable } from 'rxjs/Observable';
import { Terminal } from './result/instore/getTerminals';
import { Status } from './result/instore/status';
import { Receipt } from './result/instore/receipt';
export declare class Instore {
    static getTerminals(): Observable<Terminal>;
    private static pollStatus(observer, hash, count?);
    static payment(transactionId: string, terminalId: string): Observable<Status>;
    static getReceipt(hash: string): Observable<Receipt>;
}
