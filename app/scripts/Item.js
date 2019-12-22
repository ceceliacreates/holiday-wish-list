export default class Item {
    constructor(id, name, URL, description) {
        this.id = id;
        this.name = name;
        this.URL = URL;
        this.description = description;
    }

    add(item) {

        //sends item to API endpoint
        fetch("/api/add", {
            method: POST,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(response => {
            if (response.status == 200) {
                //-- adds item to list upon successful response

                //creates new elements to hold new item
                const itemName = document.createElement('h5');
                itemName.innerText = item.name;
                const itemURL = document.createElement('a');
                itemURL.innerText = item.URL;
                itemURL.src = item.URL;
                const itemDescription = document.createElement('p');
                itemDescription.innerText = item.description;

                const newItem = document.createElement('div');
                newItem.appendChild(itemName);
                newItem.appendChild(itemURL);
                newItem.appendChild(itemDescription);

                //grabs list div and appends new item
                const list = document.getElementById('list');
                list.appendChild(newItem);

                //updates message
                updateMessage("Item added!");
            }

            else {
                //updates message that there was an error
                updateMessage("Uh-oh! Unable to add item.");
            }
        })

    }

    // edit(item) {
    //     //sends item to API endpoint
    //     fetch("/api/edit", {
    //         method: POST,
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(item)
    //     }).then(response => {
    //         if (response.status == 200) {
    //             //-- Updates item in list upon successful response

    //             //grabs item in list with matching ID
    //             const editedItem = document.getElementById(item.id);

    //             //sets item elements based on updated values
                
    //         }
    //     })

    // }

    // delete(item) {

    // }

    // validate(item) {

    // }
}

// Item Class:
// - Properties
//   - Name
//   - URL
//   - Note
// - Methods
//   - Add (sends input as a post request to '/api/add' endpoint)
//   - Edit (sends ID + Edit input fields as put request to '/api/edit' endpoint)
//   - Delete (receives ID and sends ID as delete request to 'api/delete' endpoint)
//   - Validate (checks that required field(s) is/are not null and have a length of at least 1 then returns boolean)