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
app.get("/api/get", (req,res)=>{
  db.query("SELECT * FROM rate_my_residents", (err,result)=>{
    if(err)
      console.log(err)
  res.send(result)
  });
});

