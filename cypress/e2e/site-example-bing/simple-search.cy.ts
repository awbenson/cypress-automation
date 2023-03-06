/// <reference types="cypress" />

// Setting up all string values here, so it can be re-used in multiple places
const URLS = {
    search: ''
}

describe('Search on Bing', () => {
    beforeEach(() => {
      cy.visit('https://www.bing.com/');
    });
  
    // it('search for teddy bears and return first 12 by real API call', () => {
    //     cy.get('form textarea').type('teddy bears').wait(2000).type('{enter}');
    //     cy.get('ol#b_results > li').should('have.length', 12);
    // });

    it('search for teddy bears and return a mocked response instead', () => {
        cy.get('form textarea').type('teddy bears').wait(2000).type('{enter}');

    });
});
  