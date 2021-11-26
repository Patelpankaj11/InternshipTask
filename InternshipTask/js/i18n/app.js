const express = require("express");
const path = require("path")
const app = express()
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {

    res.render('Browser_Instructor');
});

app.get('/Development', (req, res) => {

    res.render('Development.ejs');
});

app.get('/Business', (req, res) => {

    res.render('Business.ejs');
});

app.listen(8080, () => {
    console.log("Pankaj")
});