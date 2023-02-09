import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/Login">
      <div className="signUpDiv">Нэвтрэх</div>
    </Link>
  );
}

export default Header;
