var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
  title: String,
  price: String,
  url: String,
});
/*CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};*/
mongoose.model('Item', ItemSchema);
