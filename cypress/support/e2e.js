Cypress.on('uncaught:exception', (err, runnable) => {
  // Если ошибка связана с cross-origin, можно вернуть false, чтобы тест не падал
  if (err.message.includes('Script error') || err.message.includes('cross origin')) {
    return false; // Игнорировать ошибку
  }
  // Для всех других ошибок - падать
  return true;
});