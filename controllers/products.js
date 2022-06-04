// import product from "../models/product";
import res from "express/lib/response";
import Product from "../models/product";

export const listProduct = async (request, response) => {
  try {
    const product = await Product.find().exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "không list đc " });
  }
};
export const listProductDetail = async (request, response) => {
  try {
    const product = await Product.findOne({ _id: request.params.id }).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "không hien thi đc " });
  }
};
export const AddProduct = async (request, response) => {
  
  try {
    const product = await Product(request.body).save();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "không thêm đc " });
  }
};
export const DeleteProduct = async (request, response) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: request.params.id,
    }).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "không xoa đc " });
  }
  // const product = products.filter((item) => item.id != +request.params.id);
  // response.json(product);
};
export const PostProduct = async (request, response) => {

  try {
    const product = await Product.findOneAndUpdate(
      { _id: request.params.id },request.body, { new: true }
    ).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "không update đc " });
  }
  // response.json(
  //   products.map((item) =>
  //     item.id === +request.params.id ? request.body : item
  //   )
  // );
};
export const GetProductAZ = async (request, response) => {

  try {
    const product = await Product.find({}).sort({price:1}).exec();
    response.json(product);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "không update đc " });
  }
  // response.json(
  //   products.map((item) =>
  //     item.id === +request.params.id ? request.body : item
  //   )
  // );
};
export const GetProductZA = async (request, response) => {

  try {
    const product = await Product.find({}).sort({price:-1}).exec();
    response.json(product);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "không list đc " });
  }
};
export const GetProductAZName = async (request, response) => {
 const a = request.query;
 console.log(a);

  try {
    const product = await Product.find({}).sort({name:1}).exec();
    response.json(product);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "không list đc " });
  }
};
