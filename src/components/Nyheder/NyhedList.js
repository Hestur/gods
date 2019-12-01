import React, { useContext } from "react";
import { NyhederContext } from "./NyhederState";

const NyhedList = () => {
  const { nyheder } = useContext(NyhederContext);
  return (
    <div className="nyhedbot">
      {nyheder.map(nyhed => {
        return (
          <div>
            <img src={nyhed.img} alt="" />
            <p className="smalltitle">{nyhed.title}</p>
            <p className="nyhedsmalltext">{nyhed.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NyhedList;
