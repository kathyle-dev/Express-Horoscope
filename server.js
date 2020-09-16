const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log("currently listening")
});

// app.set('view engine', 'html')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html')
  })

// app.post('/messages', (req, res) => {
//   db.collection('messages').insertOne({name: req.body.name, msg: req.body.msg, thumbUp:"", thumbDown: "", value: 0}, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/')
//   })
// })
//
// app.put('/messages', (req, res) => {
//   if(req.body.thumbUp == "yes"){
//     db.collection('messages')
//     .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//       $set: {
//         thumbUp: req.body.thumbUp,
//         thumbDown: req.body.thumbDown,
//         value:req.body.value + 1
//       }
//     }, {
//       sort: {_id: -1},
//       upsert: true
//     }, (err, result) => {
//       if (err) return res.send(err)
//       res.send(result)
//     })
//   } else if((req.body.thumbDown == "yes") && (req.body.value!=0)){
//     db.collection('messages')
//     .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//     $set: {
//       thumbUp: req.body.thumbUp,
//       thumbDown: req.body.thumbDown,
//       value: req.body.value -1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//     })
//   }
// })
//
// app.delete('/messages', (req, res) => {
//   db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
//     if (err) return res.send(500, err)
//     res.send('Message deleted!')
//   })
// })
