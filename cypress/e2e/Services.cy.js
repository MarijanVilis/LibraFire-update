/// <reference types="cypress" />


describe('Services', () => {


    beforeEach(() => {
      cy.visit('https://devlf.com/lfwebsite-update/services/')}
      
    )
     
    it('Check if the title is correct', () => {
      cy.title().should('eq', 'Services-LibraFire')
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

    it.only('Check if carousel is working', () => {
      
        cy.get('div.project-container').invoke('css', 'opacity', '1')
        cy.get('img.entered.lazyloaded').should('be.visible')
        cy.get('.slide-status > span').invoke('css', 'opacity', '1').should('eq', '01')
        cy.get('span', 'Next Project').invoke('css', 'opacity', '1').click()


    });
  
  
  })
  
  
  
  
  
  
  
  
  
  
  