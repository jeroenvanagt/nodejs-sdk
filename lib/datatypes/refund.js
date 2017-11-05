"use strict";
const dateFormat = require("dateformat");
class Refund {
}
exports.Refund = Refund;
class RefundClass extends Refund {
    constructor(data) {
        super();
        Object.assign(this, data);
    }
    getForApi() {
        var result = {
            transactionId: this.transactionId
        };
        if (this.amount)
            result['amount'] = Math.round(this.amount * 100);
        if (this.description)
            result['description'] = this.description;
        if (this.processDate)
            result['processDate'] = dateFormat(this.processDate, 'dd-mm-yyyy');
        return result;
    }
}
exports.RefundClass = RefundClass;
//# sourceMappingURL=refund.js.map