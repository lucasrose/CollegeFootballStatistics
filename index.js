var express = require('express')
  , logger = require('morgan')
  , app = express()
  , path = __dirname + "/static/source/html/"

var router = express.Router()

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get('/', function (req, res, next) {
  res.sendFile(path + "index.html")
})

app.use("/", router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})