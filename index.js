

//appel des paquets necessaires:
const express = require('express');
const app = express();
const cors = require('cors');


/* Si erreur d'update:
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
*/

//ou mettre après app
require ('./models/dbConfig');

const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.json());
app.use(cors());
/* si on veut restreindre a une adress en particulier
app.use(cors({origin: 'http://localhost:5950/posts'}));
*/
app.use('/posts', postsRoutes);

app.listen(3000, () => console.log('server connecté merveilleusement sur port: 3000'));
/*
5950
*/