const express = require('express')
const app = express()
const port = 9000

app.get('/', function(request, response){
    console.log(request.query)
    response.json(request.query)
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))