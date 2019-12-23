let items = require("./data/items.json")

const express = require("express");
const path = require("path");
const app = express();


const PORT = 9898;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve all scripts files

app.use('/scripts', express.static(__dirname + '/app/scripts'));

//HTML Routes

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/index.html"))
})

//API Routes

app.get("/api/list", function (req, res) {
    res.json(items);
})

app.post("/api/add", function (req, res) {
    console.log(req.body);
    const newItem = req.body;

    if (newItem.id == undefined) {
        newItem.id == (items.length + 1);
    }

    items.push(newItem);
    console.log(items);
    res.json(newItem);
})

app.post("/api/delete", function (req, res) {
    console.log(req.body);
    const itemToDelete = req.body.id;

    const item = items.find(element => element.id == itemToDelete);


    const index = items.indexOf(item);
    items.splice(index, 1);

    res.json(items);

})

//Starts server

app.listen(PORT, function () {
    console.log("App running on port" + PORT);
});