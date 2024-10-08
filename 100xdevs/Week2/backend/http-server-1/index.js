const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());  // Comment this middle-wire and see the difference [You can use body parser also after npm install body-parser]

// Use nodemon to avoid restarting the server after every change [npm install nodemon] 

app.get('/', (req, res) => {
  res.status(200).send('Assalamu Olaykum')
})

app.get('/conversations', (req, res) => {
  res.status(200).send('<h1>Welcome to Express JS</h1>')
})

app.post('/conversations', (req, res) => {
  console.log("Auth Status: " +  req.headers["Authorization"]);
  console.log("Request Body: " + req.body);
  res.status(200).send('<h1>Your response has been submitted</h1>')
})



app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})