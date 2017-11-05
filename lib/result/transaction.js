"use strict";
const index_1 = require("../index");
const refund_1 = require("../datatypes/refund");
class TransactionResult {
    constructor(data) {
        this.transactionId = data['transactionId'];
        this.connection = new Connection(data['connection']);
        this.enduser = new Enduser(data['enduser']);
        this.saleData = new SaleData(data['saleData']);
        this.paymentDetails = new PaymentDetails(data['paymentDetails']);
        this.statsDetails = new StatsDetails(data['statsDetails']);
    }
    isPaid() {
        return this.paymentDetails.stateName == 'PAID';
    }
    isPending() {
        return this.paymentDetails.stateName == 'PENDING' || this.paymentDetails.stateName == 'VERIFY';
    }
    isCanceled() {
        return this.paymentDetails.state < 0;
    }
    isRefunded(alsoPartial) {
        if (this.paymentDetails.stateName == 'REFUND')
            return true;
        if (alsoPartial && this.paymentDetails.stateName == 'PARTIAL_REFUND')
            return true;
        return false;
    }
    isPartiallyRefunded() {
        return this.paymentDetails.stateName == 'PARTIAL_REFUND';
    }
    isBeingVerified() {
        return this.paymentDetails.stateName == 'VERIFY';
    }
    approve() {
        return index_1.Transaction.approve(this.transactionId);
    }
    decline() {
        return index_1.Transaction.decline(this.transactionId);
    }
    refund(options = null) {
        var refund = new refund_1.Refund;
        Object.assign(refund, options);
        refund.transactionId = this.transactionId;
        return index_1.Transaction.refund(refund);
    }
}
exports.TransactionResult = TransactionResult;
class ResultRefund {
}
exports.ResultRefund = ResultRefund;
class Connection {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.Connection = Connection;
class Enduser {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.Enduser = Enduser;
function parseDate(date) {
    var arrDate = date.split('-');
    return new Date(parseInt(arrDate[2]), parseInt(arrDate[1]) - 1, parseInt(arrDate[0]));
}
class SaleData {
    constructor(data) {
        if (data['invoiceDate'])
            this.invoiceDate = parseDate(data['invoiceDate']);
        if (data['deliveryDate'])
            this.deliveryDate = parseDate(data['deliveryDate']);
        if (data['orderData']) {
            this.orderData = [];
            Object.keys(data['orderData']).forEach(key => {
                this.orderData.push(new OrderDataRow(data['orderData'][key]));
            });
        }
    }
}
exports.SaleData = SaleData;
class OrderDataRow {
    constructor(data) {
        data.price = data.price / 100;
        Object.assign(this, data);
    }
}
exports.OrderDataRow = OrderDataRow;
class PaymentDetails {
    constructor(data) {
        data['amount'] = data['amount'] / 100;
        data['currencyAmount'] = data['currenyAmount'] / 100;
        delete data['currenyAmount'];
        data['paidAmount'] = data['paidAmount'] / 100;
        data['paidCurrencyAmount'] = data['paidCurrenyAmount'] / 100;
        delete data['paidCurrenyAmount'];
        data['paidBase'] = data['paidBase'] / 100;
        data['paidCosts'] = data['paidCosts'] / 100;
        data['paidCostsVat'] = data['paidCostsVat'] / 100;
        Object.assign(this, data);
    }
}
exports.PaymentDetails = PaymentDetails;
class StatsDetails {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.StatsDetails = StatsDetails;
//# sourceMappingURL=transaction.js.map