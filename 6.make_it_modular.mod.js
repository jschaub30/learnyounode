var fs = require('fs');
var path = require('path');

module.exports = function get_files(dir, ext, callback) {
    fs.readdir(dir, function(err, file_list){
        if(err){
            return callback(err);
        }
        var files = [];
        file_list.forEach(function(file){

            if(path.extname(file) == ('.' + ext)){
                files.push(file);
            }
        })
        callback(null, files);
    });
};
