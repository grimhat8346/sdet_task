const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
