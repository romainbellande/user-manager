/// <reference path="./steps.d.ts" />

Feature('LoginPage');

// BeforeSuite((I) => {
//   I.clearCookie('token');
// });

Scenario('submit form successfully', (I) => {
  I.amOnPage('/login');
  I.seeInCurrentUrl('login');
  I.fillField('input[type="email"]', 'superadmin@example.com');
  I.fillField('input[type="password"]', 'superadmin');
  I.click('Login');
  I.dontSeeInCurrentUrl('/login');
});
