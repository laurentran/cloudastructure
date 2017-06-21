var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var routes = require('./api/routes/facesRoutes');
routes(app);

app.listen(port);

console.log('faces RESTful API server started on: ' + port);
