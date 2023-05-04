const express = require('express')
const app = express();
const port = process.env.PORT ||3000;
const cors = require('cors')

app.use(cors());

const chef = require('./Data/chef.json');
const recipes = require('./Data/recipes.json');

app.get('/',(req,res)=>{
    res.send('Welcome Dear sir! Server is Running')
})

app.get('/chef',(req,res)=>{
    res.send(chef)
})

app.get('/recipe',(req,res)=>{
    res.send(recipes)
})

app.get('/recipe/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const selected = recipes.find(viewRecipe=> viewRecipe.id === id);
    console.log(typeof(id));
    res.send(selected)
    
})

app.listen(port,()=>{
    console.log('Your Server is Runing on Port: ',port);
})