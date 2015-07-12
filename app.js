//Problem : We need a simple way to look at a user's badge count and JavaScript points
//Solution: User Node.js to connect to Treehouse's API to get profile information to print out 
var profile = require("./profile");
//var users = ["chalkers", "joykesten2", "davemcfarland"];
//console.dir(process.argv); --> users' name starting from position 2 in the array. 
var users = process.argv.slice(2);
//users.forEach(function(username){
//  profile.get(username);
//}); --> This is correct, see simplified version below:

users.forEach(profile.get);

//Run in the console, type in below command that will return profile information for all the users specified by names seperated with space. 
//node app.js chalkers123 davemcfarland joykesten2 nickpettit
