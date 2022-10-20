/// <reference types="cypress" />

  describe('My First Test', () => {
      it('Clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
        cy.get('#email1')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')

      });
  });