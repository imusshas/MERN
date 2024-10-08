// Try to access the response from two different browsers/tabs and watch how many console.log() you see.

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Assalamu Olaykum')
})

app.listen(port, "0.0.0.0", () => {
  console.log("Request has been received");
  for (let i = 0; i < 1_000_000_000_000; i++) {
    
  }
  console.log(`Example app listening on port ${port}`)
})