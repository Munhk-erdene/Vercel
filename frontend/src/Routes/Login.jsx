import React, { useState } from "react";
import HowItWorks from "../components/HowItWorks";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Made from "../components/Made";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const LoginPost = async () => {
    try {
      const res = await instance.post("/Data", {
        mail: email,
        password: password,
      });
      alert("Succesfull");
      navigate(`/Home/${res.data.data._id}`);

      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      window.localStorage.setItem("user_id", JSON.stringify(res.data.data._id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Login">
      <div className="headerContainer">
        <HowItWorks />
      </div>

      <div className="bodyContainer">
        <Logo />
        <div style={{ width: 130 }} className="title">
          Нэвтрэх
        </div>
        <div>
          <div className="two">
            <div className="text">Цахим хаяг</div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="text"
              placeholder="name@mail.domain"
            />
          </div>
          <div className="two">
            <div className="text">Нууц үг</div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              type="text"
              placeholder="••••••••••"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div>Намайг сана</div>
          <Link to="/Forget">Нууц үгээ мартсан</Link>
        </div>
        <div
          onClick={LoginPost}
          style={{ width: 381, marginTop: 20 }}
          className="signUpDiv"
        >
          Нэвтрэх
        </div>
        <Link className="SwitchRegister" to="/Register">
          Шинэ хэрэглэгч бол энд дарна уу?
        </Link>
      </div>

      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default Login;
