"use strict";
const Paynl = require("../../index");
Paynl.Config.setApiToken('your token');
Paynl.Instore.getTerminals()
    .forEach(terminal => {
    console.log(terminal.id + ' ' + terminal.name);
})
    .catch(error => console.error(error));
//# sourceMappingURL=get_terminals.js.map