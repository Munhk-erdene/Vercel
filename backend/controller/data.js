import Data from "../model/Data.js";
import jwt from "jsonwebtoken";
export const getAllDatas = async (req, res) => {
  try {
    const data = await Data.find({}).populate("link");
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createData = async (req, res) => {
  try {
    const data = await Data.create(req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const data = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getMail = async (req, res) => {
  try {
    const data = await Data.findOne({
      mail: req.body.mail,
    });
    const token = jwt.sign({ data }, "secret", { expiresIn: "99d" });
    const Login = await data.comparePassword(req.body.password);
    if (!Login) {
      return res.status(400).send({
        success: false,
        error: "Invalid password",
      });
    }
    res.status(200).send({
      success: true,
      data: data,
      token: token,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Data.findById(id).populate("link");
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
// export const HistoryFinder = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const user = await Data.findOne(id).limit(5);
//     res.status(200).send({
//       success: true,
//       data: user,
//     });
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       data: error.message,
//     });
//   }
// };
