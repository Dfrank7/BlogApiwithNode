const express = require('express')
const morgan = require('morgan');
const app = express()
const excos = require('./routes/excos')
const logger = require('./middleware/logger')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('mongodb://heroku_z41kgdm0:bmeui22ta8k02vq3kevkocrim5@ds213079.mlab.com:13079/heroku_z41kgdm0')
.then(()=> console.log('Connected to mongodb'))
.catch(err => console.error('Couldnt not connect', err))

app.use(express.json());
 app.use('/api/excos', excos)

// if(app.get('env') === 'development'){
// app.use(morgan('tiny'))
// }

// app.use(express.json())
// app.use(express.urlencoded({extended: true})) //keyvaluepair(Body of request)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));