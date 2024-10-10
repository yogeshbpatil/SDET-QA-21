describe("Handle Dropdowns", () => {



    it.skip("DropDown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
            .select("Italy")
            .should("have.value", "Italy")
    })




    it.skip("DropDown without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type("Italy").type("{enter}")

        cy.get("#select2-billing_country-container")
            .should("have.text", "Italy")
    })



    it.skip("Auto Suggest DropDown", () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Delhi")

        cy.get(".suggestion-title").contains("Delhi University").click()
    })



    it("Dynamic DropDown", () => {
        cy.visit("https://www.google.co.in/")

        cy.get("input[name='q']").type("cypress automation")
        cy.wait(3000)

        // cy.get('div.wM6W7d>spn').should("have.length", li)

        cy.get('div.wM6W7d>spn').each(($el, index, $list) => {
            if ($el.text() === 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })

        cy.get("input[name='q']").should("have.value", 'cypress automation tutorial')
    })




})