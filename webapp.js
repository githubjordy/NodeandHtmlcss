//let http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
let rsapp = require('./app');
let result = rsapp.getdata();

app.use(cors())

let resultaat;

result.then(function(value){
    //console.log(value)   
    resultaat = value;

    app.get('/', (req, res) => {
      res.json({ merchantmessage: resultaat })
    })
    
    
    app.listen(3000);
})



/*http.createServer(function (req, res) {
   // res.writeHead(200, {'Content-Type': 'text/html'});
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ merchantmessage: resultaat }));
    //res.write(resultaat);
    //res.end();
  }).listen(3000); */