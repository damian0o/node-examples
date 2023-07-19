const express = require('express')
const app = express()
const port = process.argv[2] || process.env.PORT || 3000

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 
    message: "Hello, World!", 
    port: {
      port: port,
      env: process.env.PORT,
      argv: process.argv[2],
      default: 3000
    }
  }));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
