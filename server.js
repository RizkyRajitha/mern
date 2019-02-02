const express = require("express");
const app = express();
const bp = require("body-parser");
const user = require("./db/user");
const cors = require("cors");

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

app.get("/user", (req, res) => {
  user
    .find()
    .then(result => {
      //return res.json({ success: false, error: err });
      res.json(result);
      result.forEach(element => {
        console.log(element.name);
      });
      
    })
    .catch(e => {
      res.send(e);
    });
});

app.listen(3001, () => {
  console.log("we are listinig in 3001 FM");
});
