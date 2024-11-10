// import class registerPage and creat an object of it
import {registerPage} from "../../pages/registerPage";
 const registerobj = new registerPage();

 // import fixture file  registerData.js

 import registerData from "../fixtures/registerData.json";

describe("test for register", () => {

it("test register flow", () => {

registerobj.openURL();
registerobj.firstNameField(registerData.firstName);
registerobj.lastNameField(registerData.lastName);
registerobj.emailField(registerData.email);
registerobj.telephoneField(registerData.telephone);
registerobj.passwordField(registerData.password);
registerobj.confirmPasswordField(registerData.password);
registerobj.policyCheckBox();
registerobj.continueButton();

})

// it("assertion validation", () => {

   
//         cy.get("#content >p").shoud("have.text", "Congratulations! Your new account has been successfully created!");
    
// })




})