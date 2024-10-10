// <reference types="cypress" />
// const { describe } = require("mocha")
describe("Assertions demo", () => {
    // it("Implicit asserations", () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")

    //     // cy.url().should('include', 'orangehrmlive.com')
    //     //     .should('eq', 'https://opensource-demo.orangehrmlive.com/auth/login')
    //     //     .should('contain', 'orangehrm')

    //     cy.url().should('include', 'orangehrmlive.com')
    //         .and('eq', 'https://opensource-demo.orangehrmlive.com/auth/login')
    //         .and('contain', 'orangehrm')
    //         .and('not.contain', 'greenhrm')

    //     cy.title().should('include', 'Orange')
    //         .and('eq', 'OrangeHRM')
    //         .and('contain', 'HRM')
    //     cy.get('.orangehrm-login-branding > img').should('be.visible')
    //         .and('exist')

    //     // cy.xpath("//a").should('have.length', '5')
    //     cy.get("input[placeholder='username']").type("Admin")
    //     cy.get("input[placeholder='username']").should('have.value', 'Admin')

    // })




    it("Explicit asserations", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")

        cy.get("input[placeholder='username']").type("Admin")
        cy.get("input[placeholder='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Lucy Limchiya Williams";
        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            // TDD Style
            assert.equal(actName, expName)
            assert.notequal(actName, expName)

            // https://www.youtube.com/watch?v=1ZsD0jV3v0U&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=6
        })


    })


})