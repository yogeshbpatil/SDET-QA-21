
import 'cypress-file-upload';
describe("File Upload",()=>{

    it("Single File Upload", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        // attachFile only take file from fixtures cypress folder
        cy.get("#file-upload").attachFile('Test-one.txt')
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should("have.txt", "File Uploaded!")
    })



    it("Single File - Rename", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        // attachFile only take file from fixtures cypress folder
        cy.get("#file-upload").attachFile({filePath:'Test-one.txt', fileName: 'myFileOne.txt'})  // renaming the file while uploading
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })



    it("Single File - Drag and Drop", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        // attachFile only take file from fixtures cypress folder
       cy.get("#drag-drop-upload").attachFile("Test-one.txt", {subjectType:'drag-n-drop'})  // here use drag and drop for file upload // for single file upload we need to use simple bracket
       cy.wait(5000);
       cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
       .contains("Test-one.txt")

       // https://www.youtube.com/watch?v=2sLtdJAkGvU&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=14
       // time 18.30

    })



    it.only("Multiple files - Upload", ()=>{
        cy.visit("davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["Test-one.txt", "test-two.txt"]); // for multiple file upload we need to use square bracket
        cy.wait(5000);
    })



    it("file Upload - Show Dom", ()=>{
        
    })
})