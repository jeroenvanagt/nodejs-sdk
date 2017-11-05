import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
export declare class Api {
    /**
     * Generate the url of the API to call
     */
    static getUrl(controller: any, action: any, version: any): string;
    /**
     * Checks if the result is an error (there are many ways the api can return an error)
     */
    private static isError(body);
    /**
     * Do a post request on the API.
     */
    static post(controller: any, action: any, version: any, data?: {}): Observable<any>;
}
