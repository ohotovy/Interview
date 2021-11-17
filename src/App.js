import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Listone from "./components/Listone";
import Listtwo from "./components/Listtwo";
import Header from "./components/Header";

function App() {
  const [listone, setListone] = React.useState([]);
  const [listtwo, setListtwo] = React.useState([]);
  const [listtr, setListtr] = React.useState([]);
  const dataOneUrl = `https://estate-comparison.codeboot.cz/list.php`;
  const dataTwoUrl = `https://estate-comparison.codeboot.cz/detail.php?id=2960244572`;
  const dataTwoTr = `https://estate-comparison.codeboot.cz/detail.php?id=1805827932`;
  async function fetchEstateData() {
    const resurses = await fetch(dataOneUrl);
    const result = await resurses.json();
    console.log(result);
    setListone(result);
  }
  async function fetchEstateDataTwo() {
    const resurses = await fetch(dataTwoUrl);
    const result = await resurses.json();
    console.log(result);
    setListtwo(result);
  }
  async function fetchEstateDataTr() {
    const resurses = await fetch(dataTwoTr);
    const result = await resurses.json();
    console.log(result);
    setListtr(result);
  }
  console.log(listone);
  React.useEffect(() => {
    fetchEstateData();
  }, []);
  console.log(listtwo);
  React.useEffect(() => {
    fetchEstateDataTwo();
  }, []);
  console.log(listtr);
  React.useEffect(() => {
    fetchEstateDataTr();
  }, []);

  return (
    <div className="App">
      <Header />
      <Listone firstlist={listone} />
      <Listtwo
        name={listtwo.name}
        price={listtwo.prize_czk}
        location={listtwo.locality}
        flor={listtwo.building_area}
        land={listtwo.land_area}
        namet={listtr.name}
        pricet={listtr.prize_czk}
        locationt={listtr.locality}
        flort={listtr.building_area}
        landt={listtr.land_area}
      />
    </div>
  );
}

export default App;
