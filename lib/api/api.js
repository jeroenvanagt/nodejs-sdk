"use strict";
const index_1 = require("../index");
const Observable_1 = require("rxjs/Observable");
const request = require("request");
require("rxjs/add/observable/throw");
class Api {
    /**
     * Generate the url of the API to call
     */
    static getUrl(controller, action, version) {
        var url = index_1.Config.getBaseUrl();
        url += "/v" + version;
        url += "/" + controller;
        url += "/" + action;
        url += "/json";
        return url;
    }
    /**
     * Checks if the result is an error (there are many ways the api can return an error)
     */
    static isError(body) {
        if (body['status'] && body['status'] == 'FALSE') {
            return body['error'];
        }
        if (body['request'] && body['request']['result'] && body['request']['result'] == '0') {
            return body['request']['errorId'] + " " + body['request']['errorMessage'];
        }
        return false;
    }
    /**
     * Do a post request on the API.
     */
    static post(controller, action, version, data = {}) {
        return Observable_1.Observable.create((observable) => {
            let url = this.getUrl(controller, action, version);
            data['token'] = index_1.Config.getApiToken();
            data['serviceId'] = index_1.Config.getServiceId();
            let jsonData = JSON.stringify(data);
            request.post({
                url: url,
                headers: { 'Content-Type': 'application/json' },
                body: jsonData,
            }, (error, response, body) => {
                if (error) {
                    observable.error(error);
                    return;
                }
                try {
                    body = JSON.parse(body);
                }
                catch (e) {
                    observable.error(body);
                    return;
                }
                if (this.isError(body) !== false) {
                    observable.error(this.isError(body));
                    return;
                }
                observable.next(body);
                observable.complete();
            });
        });
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map