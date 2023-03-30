const express= require('express')
const app=express()
const path= require('path')

app.use(express.static(path.join(__dirname,)))
app.get('/',(req,res)=>{
  console.log(req.url);

  res
      .status(200)
      .sendFile(path.join(__dirname,'index.html'))
})

app.get('/resources',(req,res)=>{
  console.log(req.url);

  res
      .status(200)
      .sendFile(path.join(__dirname,'resources.html'))
})

app.get('/vaccine',(req,res)=>{
  console.log(req.url);

  res
      .status(200)
      .sendFile(path.join(__dirname,'vaccine.html'))
})

app.listen(8000,()=>{
  console.log('port 8000');
})

