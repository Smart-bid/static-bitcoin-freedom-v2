describe('Main page', function() {
  it('Visit the main page', function() {
    cy.visit('https://demo.thebitcoinfreedom.com/?validation=3&acc=97')
    cy.get('.first_name')
      .type('firstname')
      .should('have.value', 'firstname')
    cy.get('.last_name')
      .type('Lastname')
      .should('have.value', 'Lastname')
    cy.get('.email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    cy.contains('hemen başlayın').click()
    cy.url().should('include', '/members?validation=3&acc=97')
    cy.get('.password')
      .type('12Qwerty')
      .should('have.value', '12Qwerty')
    cy.get('.tel')
      .type('0633223456')
      .should('have.value', '0633223456')
    cy.contains('hemen başlayın').click()
    cy.url().should('include', '/?validation=3&acc=97')
    cy.contains('System could not register you. This offer is not available for your country.')
  })
})
