 const express = require('express')
 const app = express()
 const port = 3000
 
//routes 
app.get('/',(req,res) => {
  res.send("hello node API")
})

 app.listen(3000, () => {
  console.log('node API app is running on port 3000')
 })
