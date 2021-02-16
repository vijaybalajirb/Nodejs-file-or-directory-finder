const fs = require("fs");

let path = "index.js"; //Give the path which needs to be find 

fs.lstat(path, (err, stats) => {

    if(err)
        return console.log(err); 

	if(stats.isFile()){
		console.log("It is file")
	}
	if(stats.isDirectory()){
		console.log("It is directory")
	}
    
});