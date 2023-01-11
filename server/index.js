//const path = require('path');
const express = require("express");
const cors = require('cors');
const db = require('./config/db');
const http = require('http');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post("/api/info", (req,res)=>{
  res.set('Content-Type', 'application/json');
  const name = JSON.stringify(req.body.name);

  db.query(`SELECT r.* FROM rate r INNER JOIN resident s ON r.resident_id = s.id WHERE s.name = ${name};`, (err,result)=>{
      // result is an array that contains dictionaries.
      if(err) throw err;

      result.forEach(r => {
        console.log(r)
      });

      res.send(result);
  });
});

http.get('http://localhost:3001', (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (error) => {
  console.error(error);
});

app.get("/result", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/post", (req,res)=>{
  console.log("Connected to React");
  res.redirect("/");
});

// mysql



