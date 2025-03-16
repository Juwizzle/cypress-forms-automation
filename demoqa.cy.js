///<reference types = 'cypress'/>

describe('This is demo type suite', () => {
    it('Verify that the user can visit the website', () => {
        cy.visit('https://demoqa.com/');
        //cy.get('.category-cards > :nth-child(1)').click();
       // cy.contains('Elements').click();
      // cy.get('.card.mt-4.top-card').first().click(); //This is called command chaining

      // Selected the first child from the parent class and perform a click action
       cy.get('.category-cards >:nth-child(1)').click();
       cy.contains('Text Box').click({force:true});
       // URL assertion 
       cy.url().should("eq","https://demoqa.com/text-box");
       // This is an assertion on the page title
       cy.get('h1.text-center').contains('Text Box').should('contain', 'Text Box'); // aasertion
       // These are the selectors for the input fields
       cy.get('#userName').type('Juwizzle Automation');
       cy.get('#userEmail').type('info.juwizzle@gmail.com');
       cy.get('#currentAddress').type('801 N Sierra Dr, Beverly Hills, CA 90210, USA');
       cy.get('#permanentAddress').type('611 N Alta Dr, Beverly Hills, CA 90210');
       // Submit the form data
       cy.get('#submit').click();
       // Assertion to check the outputs are submitted, correct and visible
       cy.get('#output').should('be.visible');
       // These asserted each fields displayed the correct outputs against the inputted data
       cy.get('#name').should('contain','Juwizzle Automation');
       cy.get('#email').should('contain','info.juwizzle@gmail.com');
       cy.get('.border > #currentAddress').should('contain','801 N Sierra Dr, Beverly Hills, CA 90210, USA');
       cy.get('.border > #permanentAddress').should('contain','611 N Alta Dr, Beverly Hills, CA 90210');
    });
});