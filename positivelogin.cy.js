/// <reference types="cypress" />


describe('Login with fixtures data', () => {
    it('Should try to login', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type (username)

            cy.get('#password').clear()
            cy.get('#password').type (password)

            cy.get('#login-button').click()

        })
    });
});
