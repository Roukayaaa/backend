const express = require('express');
const { CreatUser, loginuser, changePassword } = require('../Controllers/User');
const { isAuth } = require('../Middleware/IsAuth');

const router = express.Router();

router.post('/login', loginuser);
router.put('/changePassword/:_id',changePassword)
router.post('/register', CreatUser);
router.get('/current', isAuth, (req, res) => {
  res.send(req.user);
});  

module.exports = router; 
