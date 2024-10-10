// for new tab opening we have to remove the attribute of new tab creation tag and reload on same page 

describe("Hangle Tab = Approach 1", () => {
    it("Approach one", () => {
        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

        // removing the attribute of the element
        cy.get(".example>a").invoke("removeAttr", "target").click()  // click on link and after remove the target tag
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new") // child tab

        cy.wait(5000)
        // after hitting the child tab below are  operations
        cy.go('back'); // go to the parent tab

    })

    it.only("Approach two", () => {
        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

        // use href url to show on same page
        cy.get(".example>a").then((e) => {
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new") // child tab

        cy.wait(5000)
        // after hitting the child tab below are  operations
        cy.go('back'); // go to the parent tab

    })
})