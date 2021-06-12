var express = require('express');
var router = express.Router();
const User = require('../models/user');
const path = require('path');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/dashboard',(req, res)=>{
  res.render('dashboard', {user: req.session.user})

});

router.put('/editUser/:userId', function (req, res, next) {
  Employee.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, users) => {
    if (err) return res.status(500).send("Something went wrong in update users! \n" + err);
    return res.json(users)
  })
})

module.exports = router;
