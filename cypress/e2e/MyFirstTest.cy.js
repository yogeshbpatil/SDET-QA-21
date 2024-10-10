// const cypress = require("cypress")
describe('My First Test', () => {

    it('test1-verify title-positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('verify title-Negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM123')
    })
    // https://www.youtube.com/watch?v=1XHGJcBZI_0&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=4
})