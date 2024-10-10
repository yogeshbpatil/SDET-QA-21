// in cypress there is 4 types of hooks
// 1. before
 // => before run of it block . it will run only one
// 2. after
// => it will run after the completing of it block and it will only once
// 3. before each
//  => beforeEach will run after every it block
// 4. after each
// => afterEach hook will execute after completing of every hook
describe("MyTestSuit",()=>{

    before(()=>{
        cy.log("**** Launch app ****")
    })

    after(()=>{
        cy.log("**** close App ****")
    })


    beforeEach(()=>{
        cy.log("**** Login ****")
    })

    afterEach(()=>{
        cy.log("**** Logout ****")
    })

    
    it("Search", ()=>{
        cy.log("**** Searching 1 1 1 1 ****")
    })




    it("Advance Search", ()=>{
        cy.log("**** Advance Searching 2 2 2 2 ****")
    })




    it("Listing Products", ()=>{
        cy.log("**** Listing Product 3 3 3 3 3 ****")
    })
})