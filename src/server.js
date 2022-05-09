const express = require('express');
const routes = require('./routes/index.routes');
require('dotenv').config();

require('./database');
//require('./cron');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000);