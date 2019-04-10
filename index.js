var express = require('express');

var app = express();

app.get('/exemple', function(req,res) {
  res.send("YES");
});

app.use(express.static('./public'));

app.listen(3333, function(){ 
  console.log("http://localhost:3333/exemple");
});

