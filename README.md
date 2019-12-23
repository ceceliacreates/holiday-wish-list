# Holiday Wish List Full-Stack App

Built with:
- HTML
- VanillaJS
- Node
- Express
- SQL
- Sequelize

Testing with:
- Cypress.io

File Structure:
- app
  - public
    - index.html
  - scripts
    - Item.js
    - script.js
- config
  - config.js (auto-generated)
- models
  - index.js (auto-generated)
  - item.js
- test

Functionality:
- Add an item to wishlist
  - Item name (required)
  - Item link (optional)
  - Item note (optional)
- Delete an item from the wishlist
- Send the wishlist to an email address

API Endpoints:
- Get list of items on wishlist (findAll and returns results)
- Post a new item to wishlist (create based on request body)
- Delete an existing wishlist item (destroy item with given ID based on request body)

Database Models:
- Item
  - ID (auto-generated)
  - Name (string)
  - URL (string)
  - Note (text)

HTML Structure:
- Form (Name, URL, and Note inputs) with Add Item button (add() method, href='/api/add')
- Div rendering items in list, each with an Edit and Delete button (delete() method, href='/api/delete')
- Form (Name, URL, and Note inputs) that pre-fills with values from an item when an Edit button is clicked, with a Submit button to submit changes (edit() method, href='/api/edit')

Item Class:
- Properties
  - Name
  - URL
  - Note
- Methods
  - Add (sends input as a post request to '/api/add' endpoint, then upon successful response appends item to wish list)
  - Edit (sends ID + Edit input fields as put request to '/api/edit' endpoint)
  - Delete (receives ID and sends ID as delete request to 'api/delete' endpoint)
  - Validate (checks that required field(s) is/are not null and have a length of at least 1 then returns boolean)

Event Listeners:
- Add button (captures input, runs validate() then add() if valid)
- Edit button (captures ID of item/button, sets values of Edit inputs)
- Submit button (captures ID and Edit input values, runs validate(), then edit() if valid)
- Delete button class (captures ID of clicked item/button and passes ID to delete())
