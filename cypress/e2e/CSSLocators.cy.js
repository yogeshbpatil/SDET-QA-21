

describe('CSSLocators', () => {
    it('csslocators', () => {
        cy.visit("https://gh-users-search.netlify.app/")
        cy.get("input[placeholder='enter github user name']").type("Yogesh")
        cy.get("button[type='submit']").click()
        cy.get("article[class='sc-dkrFOg bHWDWn'] header div h4").contains("Yogesh Sharma")
    })
    // https://www.youtube.com/watch?v=z3IoHcqWxZg&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=5
    // video no. 5 time : 03.39
})