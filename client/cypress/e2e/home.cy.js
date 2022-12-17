it("should load the page", () => {
  cy.visit("/");
  cy.findAllByText(/Well done sir/i).should("have.length", 1);
});
