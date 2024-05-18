const LoginPage = require('./pages/login');
const ProductsPage = require('./pages/productsPage');

module.exports = () => {
  return actor({
    
    loginWithValidCredentials() {
      return LoginPage.loginWithValidCredentials();
    },
    loginWithInValidCredentials() {
      return LoginPage.loginWithInValidCredentials();
    },
    verifyProductCount(expCount) {
      return ProductsPage.verifyProductCount(expCount);
    },
    verifyDefaultSortingOrder() {
      return ProductsPage.verifyDefaultSortingOrder();
    }

  });
}
