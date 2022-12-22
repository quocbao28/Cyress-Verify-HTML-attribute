const { defineConfig } = require("cypress");
const { rmdir } = require("fs");
const del = require("del");
const path = require("path");
const gmail_tester = require("gmail-tester");
const { resolve } = require("path");
module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "config/reporterOpts.json",
  },

  e2e: {
    baseUrl: "https://store.dandelionchocolate.com/pages/home",
    chromeWebSecurity: false,
    fixturesFolder: "cypress/fixtures",
    downloadsFolder: "cypress/downloads",
    screenshotsFolder: "reports/screenshots",
    videosFolder: "reports/videos",
    viewportWidth: 1024,
    viewportHeight: 800,
    videoCompression: 38,
    numTestsKeepInMemory: 1,
    supportFile: "support/e2e.js",
    specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: true,

    includeShadowDom: true,
    // watchForFileChanges: false,
    defaultCommandTimeout: 60000,
  },
});
