Cypress.on('uncaught:exception', (err, runnable) => {

  if (err.message.includes('Script error') || err.message.includes('cross origin')) {
    return false; 
  }

  return true;
});