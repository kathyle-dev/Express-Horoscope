const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var port = process.env.PORT || 8000;
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://dbuser:db@cluster0.9xulq.mongodb.net/<dbname>?retryWrites=true&w=majority";
const dbName = "horoscope";

app.listen(port, () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

//home page//
app.get('/', (req, res) => {
    res.render('index.ejs')
})

//get filtered sign by category//
app.get('/filter/:sign?', (req, res) => {
  var sign = req.params.sign
  db.collection('sign').find().toArray((err, result) => {
    if (err) return console.log(err)
    result = result.filter(function(result) {
      if(result.name ==`${sign}`){
        return result
      }
    })
    res.render('filter.ejs', {sign: result})
  })
})
