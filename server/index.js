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
app.use((req,res,next)=>{
  console.log(req.body);
  next();
})

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

// 쿼리 콜백 문제일듯..
app.post('/api/rate', (req,res) => {
  const {residentName, quality, diff, willing, comment, tags} = req.body;

  let tagQueryFront = '';
  let tagQueryBack = '';

  if (tags.length === 1){
    tagQueryFront = ', tag1)';
    tagQueryBack = `, '${tags[0]}')`;
  }
  else if (tags.length === 2){
    tagQueryFront = ', tag1, tag2)';
    tagQueryBack = `, '${tags[0]}', '${tags[1]}')`;
  }
  else if (tags.length === 3){
    tagQueryFront = ', tag1, tag2, tag3)';
    tagQueryBack = `, '${tags[0]}', '${tags[1]}', '${tags[2]}')`;
  }

  db.query(`SELECT id FROM resident WHERE name = ?;`, [residentName],(err,result)=>{
    if(err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve resident ID.' });
    }

    const id = result[0]?.id;

    if (!id)
      return res.status(400).json({ error: 'Resident not found.' });
    
    const query = `INSERT INTO rate(resident_id, quality_rate, difficulty_rate, willingness, comment${tagQueryFront} VALUES (${id}, ${quality}, ${diff}, '${willing}', '${comment}'${tagQueryBack}`;

    db.query(query, (err, result) => {
      if (err) throw err;

      res.send('Rate has been added successfully!');
    });
  });

});
