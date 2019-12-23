import Item from "./Item.js";

// HELPER FUNCTIONS

function updateMessage(message) {
    const messageNode = document.getElementById('message');
    messageNode.innerText = message;
}

function renderToList(listItem) {
    //creates elements
    const itemNode = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemURL = document.createElement('a');
    const itemDescription = document.createElement('p');

    //sets values
    itemName.innerText = listItem.name;
    itemURL.innerText = listItem.URL ? listItem.URL : "No URL";
    itemURL.src = listItem.URL ? listItem.URL : "#";
    itemURL.style.fontStyle = 'italic';
    itemDescription.innerText = listItem.description ? listItem.description : "No Description";

    //creates delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('id', `delete-${listItem.id}`)
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'X';

    //appends to item div
    itemNode.appendChild(itemName);
    itemNode.appendChild(itemURL);
    itemNode.appendChild(itemDescription);
    itemNode.appendChild(deleteButton);

    //appends to list
    list.appendChild(itemNode);
}

function initiateWishlist() {
    fetch("/api/list").then(response => {return response.json()}).then(items => {
        //checks if there are items
        if (items.length > 0) {
            
            items.forEach(item => {
                //creates instance of Item class
                const listItem = new Item(item.name, item.URL, item.description, item.id);

                renderToList(listItem);
            })
        }
        else {
            //updates message
            updateMessage("There are no items on your wish list.");
        }
    
    })
}

// EVENT LISTENERS

//-- Add Button

document.getElementById("add-button").addEventListener("click", event => {
    event.preventDefault();

    //grabs values from form
    const itemName = document.getElementById("add-name").value;
    const itemURL = document.getElementById("add-URL").value;
    const itemDescription = document.getElementById("add-description").value;

    //creates instance of Item class
    const newItem = new Item(itemName, itemURL, itemDescription);

    //validates new Item
    // const isValid = newItem.validate();

    // if (isValid) {
    //     newItem.add();
    // }


    newItem.add().then(response => {
        if (response == true) {

            renderToList(newItem);

            updateMessage("Item added!");
        }
        else {
            updateMessage("Uh-oh! Unable to add item.");
        }
    });

})

//-- Delete Buttons

Array.from(document.getElementsByClassName('delete')).forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
    
        // grabs ID of button clicked
        let id = event.target.id;
        id = id.slice((id.length - 1));
    
        // creates instance of Item
    
        const itemToDelete = new Item();
        itemToDelete.delete(id);
})


})



initiateWishlist();