import { nanoid } from "nanoid";
import Link from "../model/Link.js";
export const getAllLinks = async (req, res) => {
  try {
    const link = await Link.find({}).skip(3);
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createLink = async (req, res) => {
  try {
    const shortLink = nanoid(4);
    const link = await Link.create({ ...req.body, shortLink: shortLink });
    console.log("ajilla");
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      link: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const link = async (req, res, next) => {
  try {
    const { id } = req.params;
    const link = await Link.findOne({
      shortLink: id,
    });

    res.status(200).redirect(link.longLink);
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
