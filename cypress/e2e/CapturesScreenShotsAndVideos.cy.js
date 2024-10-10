describe('mysuite',()=>{
    it('Capture Screenshots & Videos', () =>{
        cy.visit("https://www.w3schools.com/html/html_tables.asp");
        // cy.screenshot("homepage")
        // cy.wait(5000);
        // cy.get("img[alt='Logo']").screenshot("Logo");


        // autometically capture screenshts & video on failure - when wehn on execute throught terminal
        cy.get("div[id='subtopnav'] a[title='React Tutorial']").click()  // React
        cy.get("div[id='main'] h1").should("have.text", "React TutorialM")

    })
})