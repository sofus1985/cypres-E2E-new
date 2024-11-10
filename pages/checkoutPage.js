export class checkoutPage{

    weblocators = {

        "searchBox" : "#search > input",
        "searchButton" : "#search > span button",
        "addToCart" : "div[class='button-group']",
        "successMessage" : "div[class='alert alert-success alert-dismissible']"
        
    }




    sendSearchBar (productName) {
        cy.get(this.weblocators.searchBox).click();
        cy.get(this.weblocators.searchBox).type(productName);;
    }

    clickSearchButton() {
        cy.get(this.weblocators.searchButton).click();
    }


    clickAddToCart(){
        cy.get(this.weblocators.addToCart).click();
    }


    verifySucessMessage() {
        return cy.get(this.weblocators.successMessage);
    }
}