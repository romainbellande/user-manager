/// <reference path="./steps.d.ts" />

Feature('HomePage');

const login = (I) => {
  I.amOnPage('/login');
  I.fillField('input[type="email"]', 'superadmin@example.com');
  I.fillField('input[type="password"]', 'superadmin');
  I.click('Login');
  I.dontSeeInCurrentUrl('/login');
}

Scenario('access to settings', (I) => {
  login(I);
  I.click('Settings');
  I.seeInCurrentUrl('settings');
});
