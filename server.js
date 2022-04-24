const express = require("express");
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const { json, urlencoded } = require("body-parser");

const routes = require("./src/routes/index");
const dbConnection = require("./src/config/dbConnection");
const cronJob = require("./src/utils/Crons/supabaseProjectActive"); 

require('dotenv').config();

// adding Helmet to enhance API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

app.set('x-powered-by', false);
app.use(json({ limit: '50mb', extended: true }));
app.use(urlencoded({ limit: '50mb', extended: true }));

dbConnection.createNewConnection();
// supabaseConfig();

app.use('/', routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
    console.log("Server running on localhost:" + PORT);
    
    // running cron for supabase
    cronJob();
});