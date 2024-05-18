const { I } = inject();

module.exports = {

  fields: {
    username: '.username',
    password: '#password',
    cartContainer: '#shopping_cart_container',
    errorContainter: '.error-message-container',
    login: 'Button'
  },

  loginWithValidCredentials() {
    I.amOnPage('/');
    // I.seeElement(this.fields.username);
    I.fillField(this.fields.username, 'standard_user');
    I.fillField(this.fields.password, 'secret_sauce');
    I.click(this.fields.login);
    I.seeElement(this.fields.cartContainer);
  },

  loginWithInValidCredentials() {
    I.amOnPage('/');
    I.seeElement(this.fields.username);
    I.fillField(this.fields.username, 'stand_user');
    I.fillField(this.fields.password, 'secret_sauce');
    I.click(this.fields.login);
    I.see('Epic sadface: Username and password do not match any user in this service',
          this.fields.errorContainter);
  }
}
