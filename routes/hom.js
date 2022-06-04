// const express = require("express");
import express from "express";
const route = express.Router();
route.get("/",(request,response)=>{
    response.send(`
    
    <h1>Hom page</h1>
    <p>bcndd</p>
    
    `);
    });




// module.exports=route;
export default route;