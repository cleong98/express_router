const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3800;
const routes = require('./router/index.js')(express)
app.use('/api',routes)
app.listen(port)