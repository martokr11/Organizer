const express = require('express');
const Org     = require('../controller/OrgController');

const router  = express.Router();  


router.post('/Org/GetTasks', Org.GetTasks);


module.exports = router;   