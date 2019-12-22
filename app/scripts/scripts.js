import Item from "./Item.js";

function updateMessage(message) {
    const messageNode = document.getElementById('message');
    messageNode.innerText = message;
}

function initiateWishlist() {
    fetch("/api/list").then(response => {return response.json()}).then(items => {
        //checks if there are items
        if (items.length > 0) {
            
            const list = document.getElementById('list');
            items.forEach(item => {
                //creates instance of Item class
                const listItem = new Item(item.id, item.name, item.URL, item.description);

                console.log(listItem);

                //creates elements
                const itemNode = document.createElement('div');
                const itemName = document.createElement('h5');
                const itemURL = document.createElement('a');
                const itemDescription = document.createElement('p');

                //sets values
                itemName.innerText = listItem.name;
                itemURL.innerText = listItem.URL? listItem.URL : "No URL";
                itemURL.src = listItem.URL? listItem.URL : "#";
                itemDescription.innerText = listItem.description? listItem.description : "No Description";

                //creates buttons with edit and delete methods on click
                const deleteButton = document.createElement("button");
                deleteButton.setAttribute('onclick', `delete(${listItem.id})`)
                deleteButton.innerText = 'X';

                //appends to item div
                itemNode.appendChild(itemName);
                itemNode.appendChild(itemURL);
                itemNode.appendChild(itemDescription);
                itemNode.appendChild(deleteButton);

                //appends to list
                list.appendChild(itemNode);
            })
        }
        else {
            //updates message
            updateMessage("There are no items on your wish list.");
        }
    
    })
}

initiateWishlist();