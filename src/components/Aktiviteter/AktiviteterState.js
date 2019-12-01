import React, { createContext, useState } from "react";
export const AktivitetContext = createContext();

const AktivitetContextProvider = props => {
  const [aktivitet, setAktivitet] = useState([
    {
      img: "../pic/small-hamp.jpg",
      title: "Møllerup Hamp",
      text:
        "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje",
        link: 'Køb produkter her',
      id: 1
    },
    {
      img: "../pic/small-fest.jpg",
      title: "Møder & events",
      text:
        "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.",
        link: 'Læs mere her',
        id: 2
    },
    {
      img: "../pic/small-bord.jpg",
      title: "Fest på kroen",
      text:
        "Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.",
        link: 'Læs mere',
        id: 3
    },
    {
        img: "../pic/small-rundvis.jpg",
        title: "Rundvisninger",
        text:
          " Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup.",
          link: 'Læs mere',
          id: 4
      },
      {
        img: "../pic/small-produkter.jpg",
        title: "Hamp hudpleje",
        text:
          " Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.",
          link: 'Læs mere',
          id: 5
      },
      {
        img: "../pic/small-spisprodukt.jpg",
        title: "Hamp fødevarer",
        text:
          "Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup",
          link: 'Læs mere',
          id: 6
      },
      {
        img: "../pic/small-hus.png",
        title: "Møllerup bogen",
        text:
          "Der er kød og blod på historien, Læs mere om Marsk Stig & livet på Møllerup.",
          link: 'Køb bogen her',
          id: 7
      },
      {
        img: "../pic/small-sne.jpg",
        title: "Møllerup jagt",
        text:
          "Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.",
          link: 'Læs mere her',
          id: 8
      },
      {
        img: "../pic/small-gaard.jpg",
        title: "Ferie for 40",
        text:
          "Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool",
          link: 'Læs mere her',
          id: 9
      },
      {
        img: "../pic/small-vindue.jpg",
        title: "Bolig på landet",
        text:
          "Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.",
          link: 'Læs mere her',
          id: 10
      },
      {
        img: "../pic/small-heste.jpg",
        title: "Hestepension",
        text:
          "Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.",
          link: 'Læs mere her',
          id: 11
      },
      {
        img: "../pic/small-forsamling.jpg",
        title: "Verdensballetten",
        text:
          "Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup.",
          link: 'Læs mere her',
          id: 12
      }
      
  ]);
  return (
    <AktivitetContext.Provider value={{ aktivitet }}>
      {props.children}
    </AktivitetContext.Provider>
  );
};
export default AktivitetContextProvider;
