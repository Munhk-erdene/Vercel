import { instance } from "../App";
import React from "react";
const DeleteTwo = ({ value }) => {
  const remove = async () => {
    await instance.delete(`/Link/${value._id}`);
  };
  return <div onClick={remove}>Del</div>;
};
export default DeleteTwo;
