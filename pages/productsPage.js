var chai = require('chai'); 
var expect = chai.expect;
const { I } = inject();

module.exports = {

    fields: {
        totProductList: '.inventory_item_label',
        prodTitle: '.inventory_item_name'
    },

   async verifyProductCount(expCount) {
        let noOfProducts = await I.grabNumberOfVisibleElements(this.fields.totProductList);
        expect(noOfProducts).to.equal(expCount);
    },

    async verifyDefaultSortingOrder() {
        let sortArray = await I.limitTime(10).grabValueFromAll(this.fields.prodTitle);
        console.log('I am in this method');
        for(let i = 0; i < sortArray.length; i++) {
            console.log(`################### ${sortArray[i]}`);
        }
        // sortArray.forEach((title) => {
        //     console.log(`################### ${title}`);
        // })
    }
}