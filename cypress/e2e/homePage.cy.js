/* eslint-disable no-undef */
/// <reference types="cypress" />


describe('Home Page', () => {   
  beforeEach(() => {
    cy.visit('http://localhost:3002/')
  })
  it('should have Wikipedia heading', () => { 
    cy.get('.MuiTypography-h3').should('contain.text','Welcome to Wikipedia')  
  }) 
  it('should have free encyclopedia para', () => { 
    cy.get('.MuiTypography-p').should('contain.text','the free encyclopedia that anyone can edit.')
  }) 
  it('should have Documents title', () => { 
    cy.get('.css-xvz34l > .css-ahj2mt-MuiTypography-root').should('contain.text','Documents')
  }) 
  it('should have title Add New Document', () => { 
    cy.get('.css-1bsv467 > .MuiTypography-root').should('contain.text','Add New Document')
  }) 
  it('should Add New Document', () => { 
    cy.get('#input').type('cypresstest')
    cy.get('#textarea').type('Cypress test')
    cy.get('.css-1bsv467 > .MuiButtonBase-root').click();
    cy.wait(500)
    cy.url().should('include', '/page/cypresstest')
    cy.get('.css-xvz34l > .css-ahj2mt-MuiTypography-root').should('contain.text','Revisions') 
    cy.get('.MuiTypography-h3').should('contain.text','cypresstest')
  }) 
});