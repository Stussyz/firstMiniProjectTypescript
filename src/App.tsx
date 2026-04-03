// import { Fragment } from "react/jsx-runtime";
// mengimport component Welcome di dalam component App
import Welcome from './components/Welcome.tsx'
import HeaderComp from './components/HeaderComp.tsx'
import ProfileCard from "./components/ProfileCard.tsx";

type engineer = {
  name: string;
  year: number;
  job: string;
};

const engineers : engineer[] = [
  {
    name : "ado",
    year : 2000,
    job : "software engineer"
  },
  {
    name : "fujisaki",
    year : 1994,
    job : "mechanical engineer"
  },
  {
    name : "leonardo",
    year : 1997,
    job: "marine engineer"
  }
    ,
    ];

function App() {
  // mereturn sebuah component jsx
  return (
    // bisa pakai tag <div> | <></> | <Fragment></Fragment>
    // inline style profileCard
    <div style = {{display: "flex",flexDirection: "row", gap: "5px",}}>
      <HeaderComp />
      <h1>Learning Typescript</h1>
      {/* memanggil komponen yg ada di Welcome.tsx */}
      {/* menggunakan self closing tag pada Welcome */}
      {/* <ProfileCard Name="Ado" Job="Junior Programmer" Birth={2000}/>
      <ProfileCard Name="Fadhol" Job="Soldier" Birth={2000}/>
      <ProfileCard Name="Dara" Job="Architect" Birth={2000}/> */}

      {/* pemanggilan value menggunakan array */}
      {[
        <ProfileCard Name="Ado" Job="Junior Programmer" Birth={2000}/>,
        <ProfileCard Name="Fadhol" Job="Soldier" Birth={2000}/>,
        <ProfileCard Name="Dara" Job="Architect" Birth={2000}/>
      ]};
      

      <Welcome />
    </div>
  )
}
// di export sebagai "App" untuk pemanggilan
export default App;