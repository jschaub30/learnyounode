var fs = require('fs');
var file_string = fs.readFileSync(process.argv[2], encoding='utf8');

//console.log(file_string);

console.log(file_string.split('\n').length-1)


