/// <reference types="cypress" />


describe('Partners', () => {


    beforeEach(() => {
      cy.visit('https://www.librafire.com/our-story/partners')}
      
    )
     
    it('Check if the title is correct', () => {
      cy.title().should('eq', "Partners - LibraFire - agency's agency - getting started - our partnerships -")
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

    it('Check if the become a partner form has the correct placeholder text', () => {
        cy.get('input[data-reqmsg="Name cannot be blank."]').eq(0).should('have.attr', 'placeholder', 'Name')
        cy.get('input[data-invmsg="Please enter a valid email address"]').should('have.attr', 'placeholder', 'Email')
        cy.get('input[data-reqmsg="Agency or Organization cannot be blank."]').should('have.attr', 'placeholder', 'Agency')
        cy.get('textarea[data-invmsg="How can we help? is invalid"]').should('have.attr', 'placeholder', 'How can we help?')
        cy.contains('button', 'Submit').should('have.text', 'Submit')
        })

    it('Check the become a partner form on empty submission', () => {
        cy.contains('button', 'Submit').click()
        cy.get('div.frm_first div').should('contain', 'Name cannot be blank.')
        cy.get('div.your_email div').should('contain', 'Email cannot be blank.')
        cy.get('div.frm_full div').should('contain', 'Agency or Organization cannot be blank')
        cy.get('input[data-invmsg="Please enter a valid email address"]').type('abcd')
        cy.contains('button', 'Submit').click()
        cy.get('div.your_email div').should('contain', 'Please enter a valid email address')
        });
    
    it('Check successful submision of the become a partner form', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.get('input[data-reqmsg="Name cannot be blank."]').eq(0).type('Automation test1')
        cy.get('input[data-invmsg="Please enter a valid email address"]').type('autotest@bla.com')
        cy.get('input[data-reqmsg="Agency or Organization cannot be blank."]').type('CIA')
        cy.contains('button', 'Submit').click()
        cy.contains('p', 'Your responses were successfully submitted. Thank you!').should('contain', 'Your responses were successfully submitted. Thank you!')
        cy.get('input[data-reqmsg="Name cannot be blank."]').eq(0).should('have.value', '')
        cy.get('input[data-invmsg="Please enter a valid email address"]').should('have.value', '')
        cy.get('input[data-reqmsg="Agency or Organization cannot be blank."]').should('have.value', '')
        });

    it('Check become a partner form when there is already a user', () => {
        cy.get('input[data-reqmsg="Name cannot be blank."]').eq(0).type('Automation test1')
        cy.get('input[data-invmsg="Please enter a valid email address"]').type('autotest@bla.com')
        cy.get('input[data-reqmsg="Agency or Organization cannot be blank."]').type('CIA')
        cy.contains('button', 'Submit').click()
        cy.get('div[role="status"] p').should('contain', "We're sorry. It looks like you've already submitted that.")
        cy.get('input[data-reqmsg="Name cannot be blank."]').eq(0).should('have.value', '')
        cy.get('input[data-invmsg="Please enter a valid email address"]').should('have.value', '')
        cy.get('input[data-reqmsg="Agency or Organization cannot be blank."]').should('have.value', '')
        });
  
    it('Check if the contact us form has the correct placeholder text', () => {
      cy.get('#field_qh4icy2').should('have.attr', 'placeholder', 'Name')
      cy.get('#field_424bb').should('have.attr', 'placeholder', 'Email')
      cy.get('#field_9jv0r12').should('have.attr', 'placeholder', 'What we need to know?')
      cy.get('button[type="submit"]').should('have.text', 'SubmitSend Message')
      })
      
   
    it('Check the contact us form on empty submission', () => {
      cy.get('#frm_field_128_container > .frm_submit > .frm_button_submit').click()
      cy.get('div.frm_first div').should('be.visible').should('contain', 'Name cannot be blank.')
      cy.get('div.your_email div').should('be.visible').should('contain', 'Email cannot be blank.')
      cy.get('div.frm_full div').should('be.visible').should('contain', 'Message cannot be blank.')
      cy.get('input[data-invmsg="Please enter a valid email address."]').type('abcd')
      cy.get('#frm_field_128_container > .frm_submit > .frm_button_submit').click()
      cy.get('div.your_email div').should('be.visible').should('contain', 'Please enter a valid email address.')
    });
  
  it('Check successful submision of the contact form', () => {
    cy.get('#field_qh4icy2').type('Automation test')
    cy.get('#field_424bb').type('autotest@bla.com')
    cy.get('#field_9jv0r12').type('This is automated test message')
    cy.get('#frm_field_128_container > .frm_submit > .frm_button_submit').click()
    cy.contains('p', 'Your responses were successfully submitted. Thank you!').should('contain', 'Your responses were successfully submitted. Thank you!')
    cy.get('#field_qh4icy2').should('have.value', '')
    cy.get('#field_424bb').should('have.value', '')
    cy.get('#field_9jv0r12').should('have.value', '')
  });
  
  it('Check contact form when there is already a user', () => {
    cy.get('#field_qh4icy2').type('Automation test')
    cy.get('#field_424bb').type('autotest@bla.com')
    cy.get('#field_9jv0r12').type('This is automated test message')
    cy.get('#frm_field_128_container > .frm_submit > .frm_button_submit').click()
    cy.get('div[role="status"] p').should('contain', "We're sorry. It looks like you've already submitted that.")
    cy.get('#field_qh4icy2').should('have.value', '')
    cy.get('#field_424bb').should('have.value', '')
    cy.get('#field_9jv0r12').should('have.value', '')
  });
  
  })
  
  
  
  
  
  
  
  
  
  
  