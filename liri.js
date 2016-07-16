var fs = require('fs');

fs.readFile('./keys.js', function(err, data){
	if(err){
		return console.error(err);
	}
	else if(process.argv[2] === 'my-tweets')
	var myTweets = data;
	console.log(myTweets);
});

var command = process.argv[2];

//if(command === 'my-tweets'){
 //	console.log(myTweets);
//}//else if(command === 'spotify-this-song'){
 	//console.log(false);
//}else if(command === 'movie-this'){

//}else if(command === 'do-what-it-says'){

//}