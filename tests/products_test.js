Feature('Products page verification');

Before(({ login }) => { 
    login('User');
})

Scenario('Verify product specifications in landingpage', ({ I }) => {
    I.verifyProductCount(6);
    I.verifyDefaultSortingOrder();
});
