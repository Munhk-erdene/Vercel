import React from "react";
import HowItWorks from "../components/HowItWorks";
import Logo from "../components/Logo";
import Made from "../components/Made";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
function Forget() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const mail = useRef();
  const ForgetPass = async () => {
    const res = await instance.get(`/Data/Forget`, {});
    setData(res.data);
    console.log(data);
    navigate("/Login");
  };
  return (
    <div>
      <div className="headerContainer">
        <HowItWorks />
      </div>
      <div className="bodyContainer">
        <Logo />
        <div style={{ width: 300, margin: 30 }} className="title">
          Нууц үг сэргээх
        </div>
        <div className="send">
          Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
        </div>
        <div className="two">
          <div className="text" style={{ marginTop: 35 }}>
            Цахим хаяг
          </div>
          <input
            ref={mail}
            className="input"
            type="text"
            placeholder="name@mail.domain"
          />
          <div onClick={ForgetPass} className="sendTwo">
            Илгээх
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default Forget;
