const express = require('express')
const morgan = require('morgan');
const app = express()
const excos = require('./routes/excos')
const logger = require('./middleware/logger')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('mongodb://localhost/testing')
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