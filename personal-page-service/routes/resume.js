var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = [{  body: "I am a former legal advisor, who wants to make a professional reconversion, in the field of IT, programming, Front End Developer, Web Developer. Former student at Scoala Informala IT."}]
  res.send(jsonResponse);
});

module.exports = router;
