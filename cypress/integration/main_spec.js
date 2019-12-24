//-- Navigation

describe('Navigate to app', function() {
    it('navigates to app', function() {
      cy.visit('http://localhost:9898')
    })
  })

//-- Validation of Elements on Page

describe('Validates HTMl elements on page have loaded correctly', function() {
  it('valides h1', function() {
    cy.get('h1').should('have.text', 'Holiday Wish List');
  })

  it('validates Add Form Name label', function() {
    cy.get('[for="name"]').should('have.text', 'Item Name (Required)')
  })

  it('validates Add Form Name label', function() {
    cy.get('[for="URL"]').should('have.text', 'Item URL')
  })

  it('validates Add Form Name label', function() {
    cy.get('[for="description"]').should('have.text', 'Item Description')
  })
})

//-- Get Functionality Tests (number of elements, item name/URL/description)

describe('Validates initial wish list items are correct', function() {
  it('verifies message field is blank', function() {
    cy.get('#message').should('be.empty')
  })

  it('verifies existence of Pony item', function () {
    cy.contains('Pony');
  })

  it('verifies existence of Toy truck item', function () {
    cy.contains('Toy truck');
  })

  it('verifies existence of Doll item', function () {
    cy.contains('Doll');
  })

  it('verifies existence of Guitar item', function () {
    cy.contains('Guitar');
  })
})

//-- Add Functionality Tests (renders to DOM, message updates)

describe('Validates Add Item functionality works', function() {
  it('adds a book item', function() {
    cy.get('#add-name').type("Book");
    cy.get('#add-URL').type("www.books.com");
    cy.get("#add-description").type("A thing you read");
    cy.get('#add-button').click();
  })

  it('verifies message updated', function() {
    cy.get("#message").should('have.text', "Item added!");
  })

  it('verifies item was added to Wish List', function() {
    cy.get(':nth-child(6) > h3').should('have.text', 'Book')
  })
})

//-- Delete Functionality Test (API, removes from DOM, message updates)

describe('Valides delete functionality works', function() {
  it('deletes the pony', function() {
    cy.get('#delete-1').click();
  })

  it('verifies message updated', function() {
    cy.get('#message').should('have.text', "Item deleted.");
  })

  it('verifies item was removed from Wish List', function() {
    cy.get(':nth-child(2) > h3').should('not.have.text', "Pony")
  })
})
