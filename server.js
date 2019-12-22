let items = require("./data/items.json")

const express= require("express");
const path = require("path");
const app = express();


const PORT = 9898;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/scripts', express.static(__dirname + '/app/scripts'));

app.get("/api/list", function (req, res) {
    console.log(items);
    res.json(items);
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/index.html"))
})
            
app.listen(PORT, function () {
                console.log("App running on port" + PORT);
            });