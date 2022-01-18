const express = require ("express");
const ejs = require ("ejs");
const bodyParser = require ("body-parser");

const app = express();

app.set ("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", (req, res)=> {
    res.render("home")
})

app.post("/", (req, res)=> {
    const product = {
        productName : req.body.newProduct,
        productDescriptions: req.body.newProductDescripton
    }
})

app.listen(3000, ()=> {
    console.log("server up and running")
})