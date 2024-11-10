const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video:true,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',  // for checkout 

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  env:{  
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=common/home'  // for login only
   }


   // env:{  
//   URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'  // for register only
// }
});
