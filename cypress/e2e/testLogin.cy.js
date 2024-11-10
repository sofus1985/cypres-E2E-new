// import {loginPage} from "../../pages/loginPage"
// login = new loginPage();

// import loginData from "../../fixtures/loginData.json"


// describe ("login with valid credentials", () => {


//     it(" login", () => {

//     loginobj.navigatePAGE();
//     loginobj.clickMyaccountButton();
//     loginobj.clickLoginButton();
//     loginobj.sendEmail(loginData.email);
//     loginobj.sendPassword(loginData.password);
//     loginobj. clickButtonLogin();


//     })
// })

import { LoginPage } from "../../pages/loginPage";
import loginData from "../fixtures/loginData.json";

const login = new LoginPage();

describe("Login with valid credentials", () => {
    it("login", () => {
        login.navigatePAGE();
        login.clickMyaccountButton();
        login.clickLoginButton();
        login.sendEmail(loginData.login.email);
        login.sendPassword(loginData.login.password);
        login.clickButtonLogin();

        cy.get(" #content h2:nth-child(1)").should("have.text", "My Account");
    });
});




