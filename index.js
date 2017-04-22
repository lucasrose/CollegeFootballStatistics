var express = require('express')
  , logger = require('morgan')
  , app = express()
  , path = __dirname + "/static/source/html/"

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.use(function(req, res, next) {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.sendFile(path + "index.html")
})

app.get('/network_model', function (req, res, next) {
  res.sendFile(path + "network_model.html")
})

app.get('/teams', function (req, res, next) {
  res.redirect("http://www.foxsports.com/college-football/teams")
})

app.get('/about_us', function (req, res, next) {
  res.sendFile(path + "about_us.html")
})


app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})