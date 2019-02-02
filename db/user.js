const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://127.0.0.1:27017/WebApp");
//const mongodbAPI = 'mongodb://127.0.0.1:27017/WebApp';
const mongodbAPI = "mongodb://127.0.0.1:27017/WebApp";

mongoose.connect(mongodbAPI);

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
