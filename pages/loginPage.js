

export class LoginPage{

locators = {

"myaccountButton" : "ul[class='list-inline'] li[class ='dropdown']",
"loginButton" : "a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/login']",
"email" : "#input-email",
"password" : "#input-password",
"login" :  "input[type='submit']"
}


navigatePAGE () {
  cy.visit(Cypress.env('URL'));
}

clickMyaccountButton(){
    cy.get(this.locators.myaccountButton).click();
}

clickLoginButton() {
    cy.get(this.locators.loginButton).click();
}

sendEmail(email){
  cy.get(this.locators.email).type(email);  
}

 sendPassword(password) {
    cy.get(this.locators.password).type(password);
 }

 clickButtonLogin(){
    cy.get(this.locators.login).click();
 }


}



