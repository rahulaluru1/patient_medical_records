var express = require('express');
var path = require('path');

var app = express();
const fetch = require("node-fetch");
app.use(express.static(path.join(__dirname, 'view')));

app.listen(process.env.PORT || 8000, '0.0.0.0', function() {});
const { method } = require("bluebird");
const { response } = require("express");


module.exports = app;
