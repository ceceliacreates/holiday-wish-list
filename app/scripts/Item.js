export default class Item {
    constructor(name, URL, description, id) {
        this.name = name;
        this.URL = URL;
        this.description = description;
        this.id = id;
    }

    add() {
        return new Promise(resolve => {

            //sends item to API endpoint
            fetch("/api/add", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this)
            }).then(response => { return response.json() }).then(response => {
                if (response) {

                    resolve(true);
                }

                else {
                    resolve(false);
                }
            })

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

    delete(id) {
        console.log(id);

    }

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