import React from "react";
import { instance } from "../App";
import { Resent } from "./Resent";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Shorty() {
  const [link, setLink] = useState();
  const [url, setUrl] = useState();
  const CreateLink = async () => {
    try {
      const res = await instance.post("/Link", {
        longLink: link,
        token: JSON.parse(localStorage.getItem("token")),
        user_id: JSON.parse(localStorage.getItem("user_id")),
      });
      setUrl(res.data.data.shortLink);
    } catch (error) {
      console.log(error);
      alert("nevter");
    }
  };
  return (
    <div className="shortyContainer">
      <input
        onChange={(e) => setLink(e.target.value)}
        className="boginooInput"
        type="text"
        placeholder="https://www.web-huudas.mn"
      />
      <button onClick={CreateLink} className="boginooButton">
        Богиносгох
      </button>
      {link && <Resent data={link} shortLink={url} />}
      <ToastContainer />
    </div>
  );
}

export default Shorty;
