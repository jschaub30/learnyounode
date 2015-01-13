var readDir = require('./6.make_it_modular.mod');
var dir = process.argv[2];
var ext = process.argv[3];

readDir(dir, ext, function(err, files){
    files.forEach(function(file){
        console.log(file);
    })
})

