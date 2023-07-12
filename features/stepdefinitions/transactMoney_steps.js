const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let accountBalance = 1000000;
let cashReceived = 500000;

Given('I have UGX {int} in my account', function (amount) {
  accountBalance = amount;
});

When('I withdraw UGX {int} from the ATM', function (withdrawAmount) {
  cashReceived = withdrawAmount;
  accountBalance -= withdrawAmount;
});

Then('I should receive UGX {int} in cash', function (expectedCash) {
  expect(cashReceived).to.equal(expectedCash);
});

When('I deposit UGX {int} at the ATM', function (depositAmount) {
  accountBalance += depositAmount;
});

Then('my account balance should be UGX {int}', function (expectedBalance) {
  expect(accountBalance).to.equal(expectedBalance);
});
