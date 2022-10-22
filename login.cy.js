/// <reference types="cypress" />

describe('Browser action', () => {
    it('Should load the login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('include', 'login.html')
    });
});

describe('working with input', () => {
    it('Should fill username', () => {
        cy.get('#user_login').clear();
        cy.get('#user_login').type ('username');
    });
    it('Should fill password', () => {
        cy.get('#user_password').clear();
        cy.get('#user_password').type ('password');
    });
});

describe('Checklist the Box', () => {
    it('Should checklist the box', () => {
        cy.get('#user_remember_me').click();
    });
});

describe('Sign-in button', () => {
    it('Should click sign-in button', () => {
        cy.get('.btn-primary').click();
    });
});