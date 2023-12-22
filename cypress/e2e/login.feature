Feature: login

Scenario: verify login
Given precondition
 When provided valid username and password
 Then click submit button
 And verify title