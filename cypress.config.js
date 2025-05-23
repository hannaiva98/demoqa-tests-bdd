const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

async function setupNodeEvents(on, config) {
  await addCucumberPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
  },
  // 👇 Вынесено отдельно, а не внутри e2e
  cucumber: {
    stepDefinitions: ["cypress/support/step_definitions/**/*.{js,ts}"]
  }
});
