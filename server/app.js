                require('dotenv').config();
const express = require('express'        );
const cors    = require('cors'           ); 
const router  = require('./router/router');
const path    = require('path'           );

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(path.join(__dirname, './dist'))); // за production
app.use(cors());

app.use('/', router);

app.use((req, res) => {
  res.status(404).send("Ненамерен адрес!")
});
 
const port = process.env.APP_PORT || 1313;
app.listen(port);