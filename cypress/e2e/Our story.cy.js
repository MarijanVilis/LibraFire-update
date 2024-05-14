/// <reference types="cypress" />


describe('Homepage', () => {


    beforeEach(() => {
      cy.visit('https://devlf.com/lfwebsite-update/our-story/')}
      
    )
     
    it('Check if the title is correct', () => {
      cy.title().should('eq', 'Our story-About LibraFire')
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
  
    it('Check if the contact us form has the correct placeholder text', () => {
      cy.get('#field_qh4icy2').should('have.attr', 'placeholder', 'Name')
      cy.get('#field_424bb').should('have.attr', 'placeholder', 'Email')
      cy.get('#field_9jv0r12').should('have.attr', 'placeholder', 'What we need to know?')
      cy.get('button[type="submit"]').should('have.text', 'Send Message')
      })
      
   
    it('Check the contact form on empty submission', () => {
      cy.get('button[type="submit"]').click()
      cy.get('div.frm_first div').should('be.visible').should('contain', 'Name cannot be blank.')
      cy.get('div.your_email div').should('be.visible').should('contain', 'Email cannot be blank.')
      cy.get('div.frm_full div').should('be.visible').should('contain', 'Message cannot be blank.')
      cy.get('input[data-reqmsg="Email cannot be blank."]').type('abcd')
      cy.get('button[type="submit"]').click()
      cy.get('div.your_email div').should('be.visible').should('contain', 'Please enter a valid email address.')
  
    });
  
  it('Check successful submision of the contact form', () => {
    cy.get('#field_qh4icy2').type('Automation test')
    cy.get('#field_424bb').type('autotest@bla.com')
    cy.get('#field_9jv0r12').type('This is automated test message')
    cy.get('button[type="submit"]').click()
    cy.contains('p', 'Your responses were successfully submitted. Thank you!').should('contain', 'Your responses were successfully submitted. Thank you!')
    cy.get('#field_qh4icy2').should('have.value', '')
    cy.get('#field_424bb').should('have.value', '')
    cy.get('#field_9jv0r12').should('have.value', '')
  });
  
  it('Check contact form when there is already a user', () => {
    cy.get('#field_qh4icy2').type('Automation test')
    cy.get('#field_424bb').type('autotest@bla.com')
    cy.get('#field_9jv0r12').type('This is automated test message')
    cy.get('button[type="submit"]').click()
    cy.get('div[role="status"] p').should('contain', "We're sorry. It looks like you've already submitted that.")
    cy.get('#field_qh4icy2').should('have.value', '')
    cy.get('#field_424bb').should('have.value', '')
    cy.get('#field_9jv0r12').should('have.value', '')
  });
  
  })
  
  
  
  
  
  
  
  
  
  
  