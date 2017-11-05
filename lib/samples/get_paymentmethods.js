"use strict";
const Paynl = require("../index");
Paynl.Config.setApiToken('Your-api-token');
Paynl.Config.setServiceId('SL-6712-4510');
Paynl.Paymentmethods.getList().forEach(paymentmethod => {
    console.log(paymentmethod.id + ' ' + paymentmethod.visibleName);
})
    .catch(error => {
    console.error(error);
});
//# sourceMappingURL=get_paymentmethods.js.map