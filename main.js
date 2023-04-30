'use strict';

const g_constants = require('./constants');

const https = require('https');
const express = require('express');

const app = express();

var httpsServer = https.createServer(g_constants.SSL_options, app);

httpsServer.listen(g_constants.PORT_SSL, function(){
    console.log("SSL Proxy listening on port "+g_constants.PORT_SSL);
});

app.use(express.static(g_constants.STATIC_PAGES));

app.use((err, req, res, next) => {
    res.send(500, 'Something broke!');
});

