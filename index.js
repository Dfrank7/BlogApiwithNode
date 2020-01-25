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

var dev_db_url = 'mongodb+srv://Oladipo:kagawa26@cluster0-h4zfn.mongodb.net/test?retryWrites=true&w=majority'
var database = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(database, {useNewUrlParser: true})
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