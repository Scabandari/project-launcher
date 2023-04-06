it('should load the page', () => {
  cy.visit('/login');
  cy.get('div[data-testid=login-page]').should('exist');
});
