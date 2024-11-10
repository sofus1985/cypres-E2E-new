import {checkoutPage} from "../../pages/checkoutPage"
import loginData from "../fixtures/loginData.json"
 const checkoutobj= new checkoutPage();


 describe ("check out test", () => {

    before(() => {
        cy.login(loginData.login.email, loginData.login.password)
    })

    it ("check out", () => {

     checkoutobj.sendSearchBar(loginData.product.productName);
     checkoutobj.clickSearchButton();
     checkoutobj.clickAddToCart();

     checkoutobj.verifySucessMessage().should('contain', loginData.message.successMessage);
    })
 })