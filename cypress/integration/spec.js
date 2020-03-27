it('loads the page', () => {
  cy.visit('index.html')
  cy.contains('Hello')
})
