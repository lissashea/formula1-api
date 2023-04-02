 const express = require('express')
 const mongoose = require('mongoose')
 const app = express()
 const port = 3000

//routes 
app.get('/',(req,res) => {
  res.send("hello node API")
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

  mongoose.set('strictQuery',false)
 mongoose.connect(`mongodb+srv://lwarshaw:lissa@formula1.vgir5pd.mongodb.net/formula-api?retryWrites=true&w=majority`)
 .then(() => {
  app.listen(3000, () => {
    console.log('node API app is running on port 3000')
   })
   console.log('connected to mongodb')
 }).catch((error) => {
   console.log(error)
 })
