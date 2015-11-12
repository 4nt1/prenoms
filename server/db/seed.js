var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:17017/prenoms');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

  var nameSchema = mongoose.Schema({
    name:  String,
    gender: String,
    lang:   String
  });

  var Name = mongoose.model('Name', nameSchema);

  var prenoms   = require('./prenoms');
  Name.collection.insert(prenoms, onInsert);

  function onInsert(err, docs) {
    if (err) {
      console.log(err);
    } else {
      mongoose.disconnect();
    }
  }
});