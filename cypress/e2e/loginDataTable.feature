Feature: login with Data Table

Scenario: verify login
Given precondition
 When I log in as
    |username| password|
    |mercury | mercury|
 Then click submit button
 And verify title should be 'Login: Mercury Tours'