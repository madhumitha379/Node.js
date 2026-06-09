const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Welcome to Express Home Page");
});
app.get('/about',(req,res)=>{
    res.send("About Page -Express FrameWork");
});
app.get('/contact',(req,res)=>{
    res.send("Contact Page");
});
app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});
app.listen(3000,()=>{
    console.log("Express server running on port 3000");
});