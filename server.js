const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    server = app.listen(port,() => console.log(`Listening on port ${server.address().port}`));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({credentials:true,origin:'http://localhost:3000'}));



require('./server/config/jwt.config')
require('./server/config/database.config');
require('./server/routes/pirates.routes')(app);