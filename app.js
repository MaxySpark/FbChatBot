'use strict'

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const _ = require('underscore');
const app = express();
var config = require('./lib/config')

var port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/',function(req,res) {
    res.send("running").status(200);
});

app.listen(port, () =>
{
    console.log("Server is Started at - " + port);
});