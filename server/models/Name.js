import mongoose from 'mongoose';

let nameSchema = mongoose.Schema({
  name:   String,
  gender: String,
  lang:   String
});

nameSchema.statics.random = function() {
  this.count(function(err, count) {
    var rand = Math.floor(Math.random() * count);
    return this.findOne().skip(rand);
  }.bind(this));
};

export default mongoose.model('Name', nameSchema);