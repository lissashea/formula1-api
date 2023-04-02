 const express = require('express')
 const mongoose = require('mongoose')
 const Driver = require('./models/driverModel')
 
 const app = express()
 const port = 3000

app.use(express.json())

//routes 
app.get('/',(req,res) => {
  res.send("hello node API")
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})


app.get('/drivers',async (req, res) => {
  try {
    const drivers = await Driver.find({});
    res.status(200).json(drivers);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

app.get('/drivers/:id',async(req,res) => {
  try {
    const {id} = req.params;
    const driver = await Driver.findById(id);
    res.status(200).json(driver);
  } catch(error) {
    res.status(500).json({message: error.message})
  }
})

app.post('/drivers',async (req, res) => {
  try {
      const driver = await Driver.create(req.body)
      res.status(200).json(driver); 
  }   catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
  }
})

//update product
app.put('/drivers/:id', async(req,res) => {
  try {
    const {id} = req.params;
    const driver = await Driver.findByIdAndUpdate(id,req.body);
    if (!driver) {
      return res.status(404).json({message: `cannot find product with that id ${id}`})
    }
    res.status(200).json(driver);
  } catch {
    res.status(500).json({message: error.message})
  }
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

