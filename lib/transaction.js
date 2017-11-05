"use strict";
const start_1 = require("./result/transaction/start");
const transaction_1 = require("./result/transaction");
const transaction_start_1 = require("./datatypes/transaction-start");
const refund_1 = require("./datatypes/refund");
const api_1 = require("./api/api");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
class Transaction {
    static start(options) {
        return Observable_1.Observable.create(observable => {
            // Prepare the data
            var startData = new transaction_start_1.TransactionStartClass(options);
            if (!startData.amount) {
                observable.error('Amount is not set');
                observable.complete();
                return;
            }
            if (!startData.returnUrl) {
                observable.error('returnUrl is not set');
                observable.complete();
                return;
            }
            if (!startData.ipAddress) {
                observable.error('ipAddress is not set');
                observable.complete();
                return;
            }
            api_1.Api.post('transaction', 'start', this.version, startData.getForApi()).map((result) => new start_1.StartResult(result.transaction)).subscribe((result) => observable.next(result), (error) => observable.error(error), () => observable.complete());
        });
    }
    static get(transactionId) {
        if (!transactionId) {
            return Observable_1.Observable.throw('transactionId is not set');
        }
        return api_1.Api.post('Transaction', 'info', this.version, { transactionId: transactionId })
            .map(data => {
            data['transactionId'] = transactionId;
            return new transaction_1.TransactionResult(data);
        });
    }
    static approve(transactionId) {
        return api_1.Api.post('Transaction', 'approve', this.version, { orderId: transactionId })
            .map(result => result.request.result == '1');
    }
    static decline(transactionId) {
        return api_1.Api.post('Transaction', 'decline', this.version, { orderId: transactionId })
            .map(result => result.request.result == '1');
    }
    static refund(options) {
        var data = new refund_1.RefundClass(options).getForApi();
        if (!options.transactionId)
            return Observable_1.Observable.throw('transactionId is required');
        return api_1.Api.post('Transaction', 'refund', this.version, data)
            .map(result => result['refundId']);
    }
}
Transaction.version = 5;
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map