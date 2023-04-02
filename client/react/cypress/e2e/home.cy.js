it('should load the page', () => {
  cy.visit('/');
  cy.get('div[data-testid=home-page]').should('exist');
  cy.contains('This is the Home Page.').should('exist');
});
