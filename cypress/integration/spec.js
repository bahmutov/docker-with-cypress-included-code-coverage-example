it('loads the page', () => {
  cy.visit('http://localhost:1234')
  cy.contains('Hello')
})
