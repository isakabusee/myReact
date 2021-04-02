var express = require('express');
 
//create our app
var app = express();
// then tell it which folder we want to serve then start ur server
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express server is running on port 3000');
});