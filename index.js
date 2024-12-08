// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { error } = require('console');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// I start from here

/**
 /api/:date/ => is path for your get endpoint 
 now whatever string you use instead of :date  in url, it will be accessable by the req.params.date
 If a user accesses /api/2024-12-08, req.params.date will be "2024-12-08".

 that req.params.date is passed as parameter for the javascript Date constructor and it make a object 
 now we check in line 42 that if anyone use unix number instead of date so we use that to hadle the unix number 
 if user use other then date then it return error
*/
app.get("/api/:date", function (req, res) {
  let date = new Date(req.params.date);

  if (isNaN(date)) {
    date = new Date(+req.params.date);
  }

  if (isNaN(date.getTime())) {
    res.json({ error: "Invalid Date" })
  }

  const unixTimestamp = date.getTime();
  const utcString = date.toUTCString();

  res.json({ unix: unixTimestamp, utc: utcString });

})

// if user can not use any type of string instead of :date then we return present date

app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  })
})



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
