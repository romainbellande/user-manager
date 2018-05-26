// tslint:disable:ban-types
import { AjaxObservable } from 'rxjs/observable/dom/AjaxObservable';

interface IHttpOptions {
  headers?: Object;
  withCredentials?: boolean;
}

const headers = { 'Content-Type': 'application/json' };

export const http = {
  get: (url: string, options?: IHttpOptions) => {
    return AjaxObservable.create({method: 'get', url, headers, ...options});
  },
  post: (url: string, body?: any, options?: IHttpOptions) => {
    return AjaxObservable.create({method: 'post', url, headers, body, ...options});
  },
  put: (url: string, body?: any, options?: IHttpOptions) => {
    return AjaxObservable.create({method: 'put', url, headers, body, ...options});
  },
};
