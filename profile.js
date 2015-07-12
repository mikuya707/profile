var http = require("http");

//Pring out message
function printMessage (username, badgeCount, points){
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
    console.log(message);
};

//print out error message

function printError(error){
  console.error(error.message);
};


function getProfile(username){
//Connect to the API URL (http://teamtreehouse.com/username.json)
var req = http.get("http://teamtreehouse.com/" + username + ".json", function(res){
  var body = "";
  //Read the data
  res.on('data', function(chunk){
    body += chunk;
  });
  res.on('end', function(){
    if(res.statusCode === 200){
      try{
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      } catch(error){
        printError(error);
      } 
    }
    else{
      //Status Code Error
      printError({message: "There was an error getting the profile for " + username +". (" + http.STATUS_CODES[res.statusCode] + ")"});
    }
    
    
  });
  //Parse the data
  

  //Print the data

 
});

//Connection error 
req.on("error", printError);
} 

module.exports.get = getProfile;