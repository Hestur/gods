import React, { createContext, useState } from "react";
export const NyhederContext = createContext();

const NyhederContextProvider = props => {
  const [nyheder, setNyheder] = useState([
    {
      img: "../pic/cont1.png",
      title: "Køb vores hampeprodukter",
      text:
        "På Møllerup gods arbejder vi med hamp og hampens unikke ernæringsmessige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en lang række gode produkter, som du kan købe her på webshoppen",
      id: 1
    },
    {
      img: "../pic/cont2.png",
      title: "Verdensballetten 2019",
      text:
        "Siden 2012 har de klassiske gule mure på møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods",
      id: 2
    },
    {
      img: "../pic/cont3.png",
      title: "Historien om Møllerup Gods",
      text:
        "Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven",
      id: 3
    }
  ]);
  return (
    <NyhederContext.Provider value={{ nyheder }}>
      {props.children}
    </NyhederContext.Provider>
  );
};
export default NyhederContextProvider;
