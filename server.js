const express = require('express');
const hbs = require('hbs');
const fs = require ('fs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('theYear',function(){
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});
var app = express();
app.set('view engine','hbs');
//register middleware
app.use((req,res,next)=>{
  var date = new Date().toString();
  var log = `${date}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('sever.log',log + '\n' );
  next();
});

app.use((req,res,next)=>{
  res.render('maintenance.hbs',{
    "title":"Maintenance page",
    "message":"Error, please check back in few min"
  });
});
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
  res.render('index.hbs',{
    "title":"Home Page",
    "welcome":"Welcome to my home page"
  })
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    'title':"this is about page passing in",
  });
});

app.get
app.listen(3030);
