/// <reference types="cypress" />


describe('Services', () => {


    beforeEach(() => {
      cy.visit('https://www.librafire.com/services/web-design/')}
      
    )
     
    it('Check if the title is correct', () => {
      cy.title().should('eq', 'Web Design-LibraFire offers WordPress, Drupal, and eCommerce design')
    });
  
    it('Check the status of internal links on the page', () => {
      cy.get('a').each(link => {
        if (link.prop('href').startsWith(Cypress.config('baseUrl'))) {
          cy.request(`${link.prop('href')}`).its('status').then(statusCode => {
            expect(statusCode).to.equal(200);
          });
        }
      });
    }); 
  
  })
  
  
  
  
  
  
  
  
  
  
  