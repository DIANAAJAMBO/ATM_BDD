Feature: Transact money at ATM
  Description: As a Bank Owner, I want to increase my Clients interactions with their accounts by introducing ATMs

  Background:
    Given I have UGX 1000000 in my account
Rule:withdraw
  Scenario: Withdraw Money
    When I withdraw UGX 500000 from the ATM
    Then I should receive UGX 500000 in cash

Rule:deposit
  Scenario: Deposit Money
    When I deposit UGX 500000 at the ATM
    Then my account balance should be UGX 1500000
