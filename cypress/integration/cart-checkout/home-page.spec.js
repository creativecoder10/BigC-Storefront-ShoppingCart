/// <reference types="Cypress" />





/** Testing if all the navigation menu items are in the Home page */

context('Loading home page Navigation items', () => {


  it('1. Home Page icon', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('HOME');
  });

  it('2. Shop Page icon', () => {
    cy.contains('SHOP');
  });

  it('3. Journal Page icon', () => {
    cy.contains('JOURNAL');
  });

  it('4. More Page icon', () => {
    cy.contains('MORE');
  });

  it('5. MY CART', () => {
    cy.contains('MY CART');
  });


})

/** TESTING THE PRODUCTS IN THE HOME PAGE AND THEIR RESPONSE ON CLICKING  */

context('Products in home page', () => {


  it('Blue Stripe Stoneware Plate exists in the products', () => {
    cy.contains('Blue Stripe Stoneware Plate');
  });



  it('Hand Painted Blue Flat Dish added in my cart', () => {
    const product = 'Hand Painted Blue Flat Dish';
    cy.get('.card [name="Hand Painted Blue Flat Dish"]').contains('a', 'ADD TO CART').click();
    cy.get('.card [name="Blue Stripe Stoneware Plate"]').contains('a', 'ADD TO CART').click();
    cy.get('.card [name="Hand Painted Blue Flat Dish"]').contains('a', 'ADD TO CART').click();
    // cy.wait(1000);
  });

 


  it('Go to MY CART  ', () => {
    cy.get('.nav-item').contains('a', 'MY CART').click();

    cy.wait(500);
  });


 




})


