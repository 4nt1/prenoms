import express from 'express';
import Name     from '../models/Name';
let router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/random', function(req, res, next) {
  Name.where('lang', 'french').where('gender', 'm').count().exec().then(function(count) {
    let rand = Math.floor(Math.random() * count);
    console.log(rand);
    Name.where('lang', 'french').where('gender', 'm').findOne().skip(rand).exec().then(function(firstName) {
        res.json(firstName);
    });
  })
});

export default router;
