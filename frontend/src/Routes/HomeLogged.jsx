import React from "react";
import Logo from "../components/Logo";
import Shorty from "../components/Shorty";
import HowItWorks from "../components/HowItWorks";
import DeleteTwo from "./DeleteTwo";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
function Home() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const history = async () => {
    const res = await instance.get(`/Data/${params.userid}`);
    setData(res.data.data.link);
    setValue(res.data.data);
  };
  useEffect(() => {
    history();
  }, [data]);

  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <HowItWorks />
        <div className="signUpDiv">{value.mail}</div>
      </div>

      <div className="bContainer">
        <Logo />
        <Shorty />
      </div>

      <div className="fContainer">
        {data &&
          data.map((data) => {
            return (
              <div key={Math.random()} className="display">
                <div style={{}}>Long link:{data.longLink}</div>
                <div style={{ marginLeft: 10 }}>
                  Short link: {data.shortLink}
                </div>
                <DeleteTwo value={data} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
