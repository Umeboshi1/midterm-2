var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

router.get('/comments', function(req, res, next) {
  Comment.find(function(err, comments){
    console.log("get:" + req);
    if(err){ return next(err); }
    res.json(comments);
    
  });
});

router.post('/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    console.log("post:" + req);
    if(err){ return next(err); }
    res.json(comment);
    
  });
});

router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);
  query.exec(function (err, comment){
    console.log("param:" + req);
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find item")); }
    req.comment = comment;
    
    return next();
  });
});

router.get('/comments/:comment', function(req, res) {
  res.json(req.comment);
});

/*router.put('/items/:item/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }
    res.json(comment);
  });
});*/

router.delete('/comments/:comment', function(req, res) {
  console.log("in Delete");
  req.comment.remove();
  console.log("delete:" + req);
  res.sendStatus(200);
});
module.exports = router;
