// import { Fragment } from "react/jsx-runtime";
// mengimport component Welcome di dalam component App
import Welcome from './components/Welcome.tsx'
import HeaderComp from './components/HeaderComp.tsx'
import ProfileCard from "./components/ProfileCard.tsx";

type engineer = {
  Name: string;
  Birth: number;
  Job: string;
  Id: number;
};

const engineers : engineer[] = [
  {
    Name : "ado",
    Birth : 2000,
    Job : "software engineer",
    Id : 1
  },
  {
    Name : "fujisaki",
    Birth : 1994,
    Job : "mechanical engineer",
    Id : 2
  },
  {
    Name : "leonardo",
    Birth : 1997,
    Job : "marine engineer",
    Id : 3
  }
    ];

// component
function App() {
  // mereturn sebuah component jsx
  return (
  <>
    <HeaderComp />
    <h1>Learning Typescript</h1>
    {/* bisa pakai tag <div> | <></> | <Fragment></Fragment> */}
    {/* inline style profileCard */}
    <div style = {{display: "flex",flexDirection: "row", gap: "5px", justifyContent: "center", alignItems: "center"}}>

      {/* <ProfileCard Name="Ado" Job="Junior Programmer" Birth={2000}/>
      <ProfileCard Name="Fadhol" Job="Soldier" Birth={2000}/>
      <ProfileCard Name="Dara" Job="Architect" Birth={2000}/> */}

      {/* pemanggilan value menggunakan array */}
      {/* {[
        <ProfileCard Name="Ado" Job="Junior Programmer" Birth={2000}/>,
        <ProfileCard Name="Fadhol" Job="Soldier" Birth={2000}/>,
        <ProfileCard Name="Dara" Job="Architect" Birth={2000}/>
        ]}; */}

      {/* BEST WAY: */}
      {engineers.map((engineer) => {
        return (
          <ProfileCard
            Name={engineer.Name}
            Birth={engineer.Birth}
            Job={engineer.Job}
            // Key untuk membedakan ProfileCard 1 dgn yg lain & mempermudah rendering react
            Key={engineer.Id}
          />
        );
      })}
    </div>

    {/* memanggil komponen yg ada di Welcome.tsx */}
    {/* menggunakan self closing tag pada Welcome */}
    <Welcome />
  </>
  );
}

// di export sebagai "App" untuk pemanggilan
export default App;