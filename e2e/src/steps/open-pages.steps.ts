import {Given, Then} from 'cucumber';
import {expect} from 'chai';
import {browser} from 'protractor';

Given(/^([/a-zA-Z0-9\-_]+) is open$/, async (path: string) => {
  return browser.get('/' + path);
});

Then(/^We are in ([/a-zA-Z0-9\-_]+) page$/, async (path: string) => {
  const currentUrl = await browser.getCurrentUrl();
  expect(currentUrl).contain(path);
});

Then(/^The returnUrl is pointed to ([/a-zA-Z0-9\-_]+)$/, async (path: string) => {
  const currentUrl: string = await browser.getCurrentUrl();
  expect(currentUrl.split('%2F').join('/')).contain('/login?returnUrl=' + path);
});
