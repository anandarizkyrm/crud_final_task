
const express = require('express');
const app = express()
const methodOverride = require('method-override')
const path  = require('path')
const Tech = require('./Tech')
const sequelize = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))
app.use(methodOverride('_method'))

const port = 8080

//get all data 
app.get('/', async(req, res)=>{
  const datas = await Tech.findAll();
  res.render('index' , {datas})
})
//get soloo data 
app.get('/show/:id', async(req, res)=>{
  const response = await Tech.findOne({where : {
    id : req.params.id
  }});
  res.render('show' , {response})
})

//
app.get('/print/:id', async(req, res)=>{
  const response = await Tech.findOne({where : {
    id : req.params.id
  }});
  res.render('print' , {response})
})

//edit show 
app.get('/edit/:id', async(req, res)=>{
  const response = await Tech.findOne({where : {
    id : req.params.id
  }});
  res.render('edit' , {response})
})
//insert data 
app.post('/insert', async (req,res)=>{
    const data = await Tech.create(req.body)
    return res.redirect('/')
})


//
app.put('/update/:id', async (req,res)=>{
  const data = await Tech.update(req.body, {where : {
    id : req.params.id
  }})
  return res.redirect('/')
})


//insert data 
app.delete('/delete/:id', async (req,res)=>{
  const data = await Tech.destroy({where : {
    id : req.params.id
  }})
  return res.redirect('/')
})


app.listen(port, async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } 
    catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log("Server Start on" + " " + port);
})