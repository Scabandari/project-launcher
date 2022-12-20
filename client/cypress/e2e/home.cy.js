it('should load the page', () => {
  cy.visit('/');
  cy.get('div[data-testid=home-page]').should('exist');
  cy.findAllByText(/This is a full stack project launcher (WIP)/i).should(
    'have.length',
    1
  );
});
