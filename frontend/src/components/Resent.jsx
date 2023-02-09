import React from "react";
export const Resent = ({ data, shortLink }) => {
  return (
    <div className="shortContainer">
      <div className="column">
        <div className="links">Өгөгдсөн холбоос:</div>
        <div className="data">{data}</div>
      </div>
      <div className="column">
        <div className="links">Богино холбоос:</div>
        <div style={{ display: "flex" }}>
          <div className="data">{`localhost:8000/Link/${shortLink}`}</div>
        </div>
      </div>
    </div>
  );
};
