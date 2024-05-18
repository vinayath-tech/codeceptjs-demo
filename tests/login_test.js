Feature('Login test');

Scenario('Login with valid password',  ({ I }) => {
    I.loginWithValidCredentials();
}).tag('@wip');

Scenario('Login with Invalid password', ({ I }) => {
    I.loginWithInValidCredentials();
});


