const express = require('express');
const router = express.Router();

// router.get('/api/users/register');
router.post('/', (req, res) => {
  console.log(req.body);
  res.json({ msg: 'Message depuis le fichier register' });
});

module.exports = router;
