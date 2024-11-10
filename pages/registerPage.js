

export class registerPage 
{

    weblocator=
    {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    policyCheckBox: "input[type='checkbox']",
    continueButton: "input[type='submit']"

    }
    openURL(){
        cy.visit(Cypress.env('URL')); // URL from config.js  env
    }

    firstNameField (FName)
    {
        cy.get(this.weblocator.firstName).type(FName);

    }


    
    lastNameField (LName)
    {
        cy.get(this.weblocator.lastName).type(LName);

    }
    
    emailField (email)
    {
        cy.get(this.weblocator.email).type(email);

    }
    
    telephoneField (telephone)
    {
        cy.get(this.weblocator.telephone).type(telephone);

    }
    
    passwordField (password)
    {
        cy.get(this.weblocator.password).type(password);

    }
    
    confirmPasswordField (confirmPassword)
    {
        cy.get(this.weblocator.confirmPassword).type(confirmPassword);

    }

    policyCheckBox ()
    {
        cy.get(this.weblocator.policyCheckBox).check();

    }
    continueButton ()
    {
        cy.get(this.weblocator.continueButton).click();

    }

  


}