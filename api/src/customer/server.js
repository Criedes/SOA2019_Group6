
// Variables
const app = require('./app');
const port = process.env.PORT || 3001;

const server = app.listen(port, function() {
    console.log('Customer service is listening on port: ' + port);
  });