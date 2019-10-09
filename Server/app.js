if(process.env.NODE_ENV == "development"){
  require('dotenv').config()
}

const express = require('express');
const router = require('./routes/index')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log('db ready');
  })
  .catch((err)=>{
    console.log(err);
  })

app.use('/', router)

app.listen(port, ()=>{
  console.log(`listen on port ${port}`);
})