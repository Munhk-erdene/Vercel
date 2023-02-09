import Data from "../model/Data.js";
import Link from "../model/Link.js";

export const checkRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    const user = await Data.findById(link.user_id);
    if (user.role === "admin") {
      console.log("admin fucked");
      return next();
    } else {
      console.log("perm denied");
    }
  } catch (error) {
    res.status(401).send({
      success: false,
    });
  }
};
