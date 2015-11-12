import mongoose from 'mongoose';

let matchSchema = mongoose.Schema({
  winnerId: mongoose.Schema.Types.ObjectId,
  looserId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model('Match', matchSchema);