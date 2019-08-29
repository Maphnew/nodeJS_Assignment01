const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, ()=>{
    console.log("Start! Express server on http://localhost:3000 << ctrl+click!")
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('<h1>Hi! There!</h1>');
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
})

app.post('/ajax_send_email', (req, res) => {
    console.log("here:"+req.body.email)
    const responseData = {'result':'ok', 'email':req.body.email}
    res.json(responseData);
})
