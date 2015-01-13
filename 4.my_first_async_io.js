var fs = require('fs');

var num_lines = 0;

fs.readFile(process.argv[2], encoding='utf8', function(err, file_string) {
    console.log(file_string.split('\n').length-1);
});

