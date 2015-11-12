import express  from 'express';
import Name     from '../models/Name';
import Match     from '../models/Match';

let router = express.Router();

router.get('/new', function(req, res, next) {
  Name.where('lang', 'french').where('gender', 'm').count().exec().then(function(count) {
    let rand = Math.floor(Math.random() * count);
    console.log(rand);
    Name.where('lang', 'french').where('gender', 'm').findOne().skip(rand).exec().then(function(firstName) {
      console.log(firstName);
      let rand = Math.floor(Math.random() * count);
      console.log(rand);
      let secondName = Name.where('lang', 'french').where('gender', 'm').findOne().skip(rand).exec().then(function(secondName) {
        console.log(secondName);
        res.json([firstName, secondName]);
      });
    });
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  Match.create(req.body, function() {
    res.status(201);
    res.json({});
  })
})

export default router;
