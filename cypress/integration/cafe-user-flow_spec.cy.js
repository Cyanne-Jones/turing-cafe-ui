describe('Turing Cafe user flow ', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  //Write tests covering what should be displayed on the page when the user first visits.
  //Write a test that checks that when data is put into the form, the value is reflected in that form input.
  //Write a test to check the user flow of adding a new reservation to the page.

  it('Should show site title when page is visited', () => {
    cy.contains('h1', 'Turing Cafe Reservations');
  });

  it('Should have a form for users to enter their information', () => {
    cy.get('form').find('input').should('have.class', 'formInput')
  });

  it('Should show all reservations on page load', () => {
    cy.get('.resy').contains('Christie');
    cy.get('.resy').contains('12/29');
    cy.get('.resy').contains('7:00 pm');
    cy.get('.resy').contains('Number of Guests: 12');
  });

  it('Should update the form\'s value based on user input', () => {
    cy.get('#name').type('Cyanne Jones').should('have.value', 'Cyanne Jones');
    cy.get('#date').type('02/27').should('have.value', '02/27');
    cy.get('#time').type('7:00').should('have.value', '7:00');
    cy.get('#numberOfGuests').type('2').should('have.value', '2');
  });

  it('Should show user\'s reservation on the DOM after they enter their information and click the Make Reservation button', () => {
    cy.get('#name').type('Cyanne Jones');
    cy.get('#date').type('02/27');
    cy.get('#time').type('7:00');
    cy.get('#numberOfGuests').type('2');
    cy.get('#makeReservationButton').click();
    
    cy.get('.resy').contains('Cyanne Jones');
    cy.get('.resy').contains('02/27');
    cy.get('.resy').contains('7:00 pm');
    cy.get('.resy').contains('Number of Guests: 2');
  })
});