import Categories from "../models/categories";
import Product from "../models/product";
export const ListCategories =async (request, response) => {
  try {
    const categories =await Categories.find({}).exec();
    response.json(categories);
    console.log(categories);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "khong list duoc" });
  }
};
export const DeleteCategories = (request, response) => {
  try {
    const categories = Categories.findOneAndDelete({
      _id: request.params.id,
    }).exec();
    response.json(categories);
  } catch (error) {
    response.status(400).json({ message: "khong xoa duoc" });
  }
};
export const PostCategories = async (request, response) => {
  try {
    const categories = await Categories(request.body).save();
    response.json(categories);
  } catch (error) {
    response.status(400).json({ message: "khong them duoc" });
  }
};
export const ListCategoriesDetail = async (request, response) => {
  try {
    const categoryId = await Categories.findOne({
      _id: request.params.id,
    }).exec();
    const product = await Product.find({ categoryId })
      .populate("categoryId")
      .exec();
    response.json({ categoryId, product });
  } catch (error) {
    response.status(400).json({ message: "khong list duoc" });
  }
};
