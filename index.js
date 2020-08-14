const express = require('express');
var pg = require('pg');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {

  const config = {
    host: 'postgres',
    user: 'postgres',
    database: 'postgres',
    password: 'postgres',
    port: 5432
  };
  const pool = new pg.Pool(config);
  pool.connect(function (err, client, done) {
    if (err) {
       console.log("Can not connect to the DB" + err);
    }
    console.log('connected');
   })

  res.send('Hello world teste 7');
});

app.listen(PORT, HOST);
