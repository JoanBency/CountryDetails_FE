const baseUrl = 'http://localhost:3000';
const apiUrl = 'http://localhost:3001';
var CountryName = 'United States of America';

describe('The Search Home Page', () => {
  beforeEach(('passes'), () => {
    cy.visit(baseUrl);
  });

  it('Home link works', () => {
    cy.get('nav').contains('Home').click;
  });
  it('Search link works', () => {
    cy.get('nav').contains('Search').click();
  });
  it('Search Countries button works', () => {
    cy.get('button').contains('Search Countries').click();
  });
  it('Search input field works', () => {
    cy.visit(`${baseUrl}/search`);
    cy.get('input').type(CountryName);
  });
});