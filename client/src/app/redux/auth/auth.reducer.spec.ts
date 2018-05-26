import { authReducer } from './auth.reducer';
import { AuthActions } from './auth.actions';
import { authMock } from '../../common/mocks';

describe('AuthReducer', () => {

  it ('should return the initial state', () => {
    expect(authReducer(undefined, {type: ''})).toEqual({
      expiresIn: null,
      token: null,
      loginFromCookiesStatus: null,
    })
  });

  it('should handle loginFormCookie', () => {
    expect(authReducer(undefined, {
      type: AuthActions.loginFromCookies.success(),
      payload: authMock
    })).toEqual({...authMock, loginFromCookiesStatus: 'success'})
  });
});
