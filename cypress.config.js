const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Initialize the Allure plugin
      allureWriter(on, config);

      // Return the configuration without custom hooks
      return config;
    },
    video: true,
    videoCompression: 32,
    videoFolder: 'cypress/videos',
  },
  env: {
    url: "",
  },
  reporterOptions: {
    allure: true,
    outputDir: 'cypress/allure-results',
  },
});
