/// <reference types="Cypress" />
config = require('../config/config.production.json');



describe ('This will test higher savings applied between automatic and manually discount', () => {

    beforeEach(() => {
        cy.visit(Cypress.env(config.baseUrl))
    })

    it('Logins successfully', () => {
        const expectedUsernameText = "Hello " + Cypress.env(USERNAME)

        loginExistingUser(Cypress.env(USERNAME),Cypress.env(PASSWORD))
        cy.get(HomePageObjects.displayUsername).should('have text', expectedUsernameText).screenshot({capture: 'fullPage'})
    })
})