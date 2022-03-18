const router = require("express").Router();
const Category = require("../models/Category");

//Create Category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get Category
router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});
