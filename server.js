const bodyParser = require('body-parser'),
  cors = require('cors'),
  express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  // MONGO = require('./keys/mongo');
  port = process.env.PORT || 8000;

// Allow us to return json to client
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

// Add headers for http requests
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,origin,content-type,accept'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Connect to our mongo database
mongoose.connect(
  'mongodb://localhost/trips',
  {
    useNewUrlParser: true,
  }
);

// Instantiate all our routes
require('./routes/index')(app);

// Start server
app.listen(port);
console.log(`Magic happens on port: ${port}`);
