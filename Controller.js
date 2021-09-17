const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const { response } = require('express');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let tracking=models.Tracking;
let product=models.Product;

app.post('/login',async (req,res)=>{
    let response=await user.findOne({
        where:{name:req.body.name, password: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

//Criação do produto no banco
app.post('/create',async (req,res)=>{
    let trackingId='';
   await tracking.create({
        userId: req.body.userId,
        code: req.body.code,
        local: req.body.local
   }).then((response)=>{
        trackingId+=response.id;
   });

   await product.create({
       trackingId: trackingId,
       name: req.body.product
   });

    let response=await tracking.findOne({
    where:{
        userId:req.body.userId,
        code: req.body.code,
        local: req.body.local}
    });

    if(response !== null){
        res.send(response);
    }

});
//teste de requisição
app.post('/read',async (req,res)=>{
    let response=await product.findAll();
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(JSON.stringify(response));
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});