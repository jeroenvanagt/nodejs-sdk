"use strict";
const Observable_1 = require("rxjs/Observable");
const getTerminals_1 = require("./result/instore/getTerminals");
const api_1 = require("./api/api");
class Instore {
    static getTerminals() {
        return Observable_1.Observable.create(observer => {
            api_1.Api.post('Instore', 'getAllTerminals', 2)
                .map(result => result.terminals)
                .subscribe(terminals => {
                for (let index in terminals) {
                    let terminal = new getTerminals_1.Terminal(terminals[index]);
                    if (terminal.ecrProtocol == 'WEB') {
                        observer.next(terminal);
                    }
                }
            }, error => {
                observer.error(error);
            }, () => observer.complete());
        });
    }
    static pollStatus(observer, hash, count = 1) {
        if (count == 20) {
            observer.complete();
            return;
        }
        setTimeout(() => {
            api_1.Api.post('Instore', 'status', 2, { hash: hash }).subscribe(result => {
                let status = {
                    state: result.transaction.state,
                    percentage: result.progress.percentage,
                    hash: hash
                };
                observer.next(status);
                if (status.state == 'init') {
                    this.pollStatus(observer, hash, count + 1);
                }
                else {
                    observer.complete();
                }
            }, error => observer.error());
        }, 3000);
    }
    static payment(transactionId, terminalId) {
        return Observable_1.Observable.create(observer => {
            let data = {
                transactionId: transactionId,
                terminalId: terminalId
            };
            api_1.Api.post('Instore', 'payment', 2, data).subscribe(result => {
                let status = {
                    state: result.transaction.state,
                    percentage: result.progress.percentage,
                    hash: result.transaction.terminalHash
                };
                observer.next(status);
                let terminalHash = result.transaction.terminalHash;
                this.pollStatus(observer, terminalHash);
            }, error => observer.error(error));
        });
    }
    static getReceipt(hash) {
        return Observable_1.Observable.create(observer => {
            let data = {
                hash: hash
            };
            api_1.Api.post('Instore', 'getTransactionTicket', 2, data).subscribe(result => {
                let receiptData = Buffer.from(result.receipt, 'base64').toString();
                let receipt = {
                    approvalId: result.approvalId,
                    cardBrandId: result.cardBrandId,
                    cardBrandName: result.cardBrandName,
                    paymentProfileId: result.paymentProfileId,
                    receipt: receiptData
                };
                observer.next(receipt);
                observer.complete();
            }, error => {
                observer.error(error);
            });
        });
    }
}
exports.Instore = Instore;
//# sourceMappingURL=instore.js.map