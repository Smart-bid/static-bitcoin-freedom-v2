describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('localhost:3000/?validation=3&acc=97')
  })
})
