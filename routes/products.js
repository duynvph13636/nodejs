// const express = require("express");
import express from "express";
import { userById } from "../controllers/auth";
import {
  AddProduct,
  DeleteProduct,
  GetProductAZ,
  GetProductAZName,
  GetProductZA,
  listProduct,
  listProductDetail,
  PostProduct,
} from "../controllers/products";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
const route = express.Router();
route.get("/products/:id", listProductDetail);
route.get("/products", listProduct);
// route.post("/products/:userId",requireSignin,isAuth,isAdmin, AddProduct);
route.delete("/products/:id", DeleteProduct);
route.put("/products/:id", PostProduct);
route.post("/products", AddProduct);
route.get("/sort",GetProductAZ);
route.get("/sort/dec",GetProductZA);
route.get("/name",GetProductAZName);
// module.exports=route;
route.param("userId",userById);
export default route;
