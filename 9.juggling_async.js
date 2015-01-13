var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var results = [];
var count = 0;

function printResults(){
  for (k = 0; k < urls.length; k++)
    console.log(results[k])
}

function httpGet (index){
  http.get(urls[index], function(res){
    res.pipe(bl(function (err, data) { 
      if (err)
      return console.error(err)

      results[index] = data.toString()
      count++;

    if (count==3)
      printResults()
    }))
  })
}


for (j = 0; j < urls.length; j++){
  httpGet(j)
}

