const express = require('express');
const Tasks   = require('../controller/OrgController');

const router  = express.Router();  


router.post('/Org/GetTasks', Tasks.GetTasks);


module.exports = router;   