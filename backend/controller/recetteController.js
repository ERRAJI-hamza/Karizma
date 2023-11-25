import recetteModel from "../models/recetteModel.js";

import fs from "fs";


export const addrecetteController = async (req, res) => {
  try {
    const { name, ingerdients, preparationSteps, preparationTime } =
      req.fields;
    const { photo } = req.files;
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !ingerdients:
        return res.status(500).send({ error: "Description is Required" });
      case !preparationSteps:
        return res.status(500).send({ error: "Price is Required" });
      case !preparationTime:
        return res.status(500).send({ error: "Category is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const recette = new recetteModel({ ...req.fields});
    if (photo) {
        recette.photo.data = fs.readFileSync(photo.path);
        recette.photo.contentType = photo.type;
    }
    await recette.save();
    res.status(201).send({
      success: true,
      message: "Recette Created Successfully",
      recette,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing recette",
    });
  }
};


//get all recette
export const recettesControlller = async (req, res) => {
    try {
      const recettes = await recetteModel.find({})
      res.status(200).send({
        success: true,
        message: "ALLRecettes ",
        recettes,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting recettes",
        error: error.message,
      });
    }
  };