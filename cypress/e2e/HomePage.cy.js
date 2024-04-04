

describe('Homepage', () => {
    beforeEach(() => cy.visit('https://devlf.com/lfwebsite-update/'));

  it('Check if the title is correct', () => {
    cy.title().should('eq', 'Web development and web design agency: LibraFire')
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

  it('Check the status of all links on the page', () => {
    cy.get('a').each(link => {
      cy.request(`${link.prop('href')}`).its('status').then(statusCode => {
        expect(statusCode).to.equal(200);
      });
    });
  });
  
})