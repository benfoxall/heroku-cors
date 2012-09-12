var http = require('http'),
    request = require('request');


var host = process.env.TARGET;

var app = http.createServer(function (req, resp) {

  if(!host){
    return resp.end("No host set, `heroku config:add TARGET=http://t.com`");
  }

  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

  request({
    url:host + req.url
  }).pipe(resp);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
