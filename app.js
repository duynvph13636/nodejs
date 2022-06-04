//b1 : include thư viện http
import express from "express";
import mongoose from "mongoose";
const app = express();
// import productDetailRoute from "./routes/productDetail"
import { use } from "express/lib/application";
import homRoute from "./routes/hom";
import productRoute from "./routes/products";
import UserRoute from "./routes/auth";
import cors from "cors";
// import CategoriesRoute from "./routes/categories";
import categoriesRout from "./routes/categories";
app.use(express.json());

app.use(cors());
app.use(homRoute);
app.use("/api",categoriesRout);
app.use("/api",productRoute);
app.use("/api",UserRoute);
// app.use(productDetailRoute);
mongoose.connect("mongodb://localhost:27017/we16307");
// b3 : lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
