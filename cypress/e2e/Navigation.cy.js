// go()  => use for navigation

describe('mysuite',()=>{
    it("NavigationTest",()=>{
        cy.visit("https://demo.opencart.com/en-gb?route=common/home");
        cy.title().should('eq', 'Your Store');  // Home Page

        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should("have.text", "Cameras"); // Camera Page

        cy.go('back');// go back to the home page
        cy.title().should('eq', 'Your Store');

        cy.go('forward');
        cy.get("div[id='content'] h2").should("have.text", "Cameras"); // Camera Page

        cy.go(-1);  // HOme Page
        cy.title().should('eq', 'Your Store');

        cy.go(1)
        cy.get("div[id='content'] h2").should("have.text", "Cameras"); 

        cy.reload(); // reload the page

    })
})