import { IAuthState } from '../../../redux/auth';

const getAuthHeader = (auth: IAuthState) => {
  let res = {};
  if (auth.token) {
    res = { Authorization: 'Bearer ' + auth.token };
  }
  return res;
};

export const authInterceptor = (getAuth: () => IAuthState) => {
  const send = XMLHttpRequest.prototype.send;
  // tslint:disable-next-line:only-arrow-functions
  XMLHttpRequest.prototype.send = function(data) {
    if (this.withCredentials) {
      const authHeader = getAuthHeader(getAuth());
      for (const headerKey in authHeader) {
        if (!!authHeader[headerKey]) {
          this.setRequestHeader(headerKey, authHeader[headerKey]);
        }
      }
    }
    this.withCredentials = false;
    send.call(this, data);
  };
};
