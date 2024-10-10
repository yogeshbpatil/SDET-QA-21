describe("Check UI Elements", () => {
    // it("Checking Radio Buttons", () => {
    //     cy.visit("https://testautomationpractice.blogspot.com/")

    //     //visibility of radio buttons
    //     cy.get("input#male").should("be.visible")
    //     cy.get("input#female").should("be.visible")

    //     // selectiong radio buttons
    //     cy.get("input#male").check().should("be.checked")
    //     cy.get("input#female").should("not.be.checked")

    //     cy.get("input#female").check().should("be.checked")
    //     cy.get("input#male").should("not.be.checked")
    // })


    it("Checking checboxes Buttons", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of checboxes buttons
        // cy.get("input#monday").should("be.visible")


        // selectiing single checboxes buttons
        // cy.get("input#monday").check().should("be.checked")

        // unslecting the selected checkbox
        // cy.get("input#monday").uncheck().should("not.be.checked")

        // selecting all the checkboxes
        // cy.get("input.form-check-input[type=checkbox]").check().should("be.checked")
        // cy.get("input.form-check-input[type=checkbox]").uncheck().should("be.not.checked")

        // to select first checkbox
        cy.get("input.form-check-input[type=checkbox]").first().check().should("be.checked")
        cy.get("input.form-check-input[type=checkbox]").last().check().should("be.checked")



    })
})