import React, { useContext } from "react";
import { AktivitetContext } from "./AktiviteterState";

const AktivitetList = () => {
  const { aktivitet } = useContext(AktivitetContext);
  return (
    <div className="grid3x4">
      {aktivitet.map(aktivitet => {
        return (
          <div>
            <img src={aktivitet.img} alt="" />
            <p className="largetext">{aktivitet.title}</p>
            <p className="smalltext">{aktivitet.text}</p>
            <a href="" className="link">{aktivitet.link}</a>
          </div>
        );
      })}
    </div>
  );
};

export default AktivitetList;