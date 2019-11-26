const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.sendFile('./htmlFiles/home.html', { root:__dirname })
})

app.use(express.static('./htmlFiles'))

app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
})