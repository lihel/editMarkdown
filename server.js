const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser');

const hello = require('./server/routers/hello');
const addEdit = require('./server/routers/addEdit');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use("/", hello);
app.use('/',addEdit);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});

