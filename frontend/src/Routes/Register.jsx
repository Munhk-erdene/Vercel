import React from "react";
import Logo from "../components/Logo";
import HowItWorks from "../components/HowItWorks";
import Made from "../components/Made";
import { instance } from "../App";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
function Register() {
  const mail = useRef();
  const password = useRef();
  const rePassword = useRef();
  const navigate = useNavigate();
  const clickHandler = async () => {
    if (password.current.value === rePassword.current.value) {
      try {
        const res = await instance.post("/Data/Post", {
          mail: mail.current.value,
          password: password.current.value,
        });
        console.log(res.data);
        alert("Amjilttai burtguulev");
        navigate("/Login");
      } catch (error) {
        toast.error(error.response.data.data);
        console.log(error.response.data.data);
      }
    } else {
      toast.error("Nuuts ug zurud baina   ");
    }
  };

  return (
    <div>
      <div className="headerContainer">
        <HowItWorks />
      </div>
      <div className="bodyContainer">
        <Logo />
        <Link to="/Login">
          {" "}
          <div style={{ width: 130 }} className="title">
            Нэвтрэх
          </div>
        </Link>

        <div>
          <div className="two">
            <div className="text">Цахим хаяг</div>
            <input
              ref={mail}
              className="input"
              type="text"
              placeholder="name@mail.domain"
            />
          </div>
          <div className="two">
            <div className="text">Нууц үг</div>
            <input
              ref={password}
              className="input"
              type="text"
              placeholder="••••••••••"
            />
          </div>
          <div className="two">
            <div className="text">Нууц үгээ давтна уу?</div>
            <input
              ref={rePassword}
              className="input"
              type="text"
              placeholder="••••••••••"
            />
          </div>
        </div>
        <div
          onClick={clickHandler}
          style={{ width: 381, marginTop: 20 }}
          className="signUpDiv"
        >
          Бүртгүүлэх
        </div>
      </div>
      <div className="footerContainer">
        <Made />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
