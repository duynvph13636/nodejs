import express from "express";
import { DeleteCategories, ListCategories, ListCategoriesDetail, PostCategories } from "../controllers/categories";
const route = express.Router();
route.get("/categories",ListCategories);
route.get("/categories/:id",ListCategoriesDetail);
route.post("/categories",PostCategories);
route.delete("/categories/:id",DeleteCategories);
export default route;