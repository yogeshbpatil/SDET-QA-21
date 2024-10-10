describe("Alert", () => {

    // 1) Javascript Alert: It will have some text and an 'OK' buton
    it('Js Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('I am a JS Alert')
        })

        // alert window autometically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    // 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it('Js confirm Alert - ok', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contain('I am a JS Confirm')
        })
        // cypress autometicall closed alert window by using ok button-default
        cy.get("#result").should("have.text", "You clicked: Ok")
    })



    it('Js confirm Alert-  Cancle', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contain('I am a JS Confirm')
        })
        cy.on("window:confirm", () => false) // cypress closed alert window using cancle button
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })


    // 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'ok'
    it('Js prompt Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();

        // cypress will autometically close prompted alert - it will use OK button - by default
        cy.on("window:prompt", () => false);
        cy.get("#result").should('have.text', 'You entered: welcome');

    })
    // 4) Authentiacated Alert

    it.only('Authenticated Alert', () => {
        // approach 1
        // send as a parameter
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin" } })
        // cy.get("div[class='example'] p").should("have.contain", "Congratulations")

        // approach 2
        // diresct inside url
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")



    })

    // https://www.youtube.com/watch?v=5SNw69hHuNE&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=9
    // Video No. 09 Time : 37.22

})