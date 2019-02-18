let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.ejs', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about.ejs', { title: 'About' });
});

/* GET products page. */
router.get('/projects', function(req, res, next) { 
  res.render('projects.ejs', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { title: 'Contact' });
});


module.exports = router;
