//console.log('this is loaded');
 
exports.twitterKeys = {
  consumer_key: 'Dj8QBtWr4D9gSuagLNtVFfuFv',
  consumer_secret: '	SFdhiv8GEYIbIRreYFAFl2on58GPnQM3rqIC8mBR6lodmkJKAS',
  access_token_key: '25750622-PNwGDTxQwKjJqjVJRaVyVzbq1eGK9QQUdkLgQPf9Q',
  access_token_secret: 'GqU2OpupXCsGEscsfxnxIJg2BYexc8Wwkn7OKSRETVBPX'
}

var params = {screen_name: '@dalabi', tweetCount: 20};
getTwitter.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
  	var numTweets = tweets.length; j++
  	for(var d=0; d<tweets.length; d++){
  		console.log("Tweet: " + [d + 1] + " " + tweets[d] ['text'] + ". tweeted on " + tweets[d]['created_at'] + '.');
  	}
    numTweets--;
  }
  
});