//const path = require('path');
const express = require("express");
const db = require('./config/db');

const PORT = process.env.PORT || 3001;

const app = express();


// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/post", (req,res)=>{
  console.log("Connected to React");
  res.redirect("/");
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// mysql
app.post("/result/post", (req,res)=>{
  db.query(`SELECT r.* 
    FROM rate r INNER JOIN resident rs on r.student_id = rs.student_id 
    WHERE rs.name = {req.name}`, (err,result)=>{
      // result is an array that contains dictionaries.
      if(err) throw err;
      res.send(result)
  });
});

