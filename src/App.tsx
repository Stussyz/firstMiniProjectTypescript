// import { Fragment } from "react/jsx-runtime";
// mengimport component Welcome di dalam component App
import Welcome from './components/Welcome.tsx'
import HeaderComp from './components/HeaderComp.tsx'
import ProfileCard from "./components/ProfileCard.tsx";

function App() {
  // mereturn sebuah component jsx
  return (
    // bisa pakai tag <div> | <></> | <Fragment></Fragment>
    <div style = {{display:"flex", flexDirection:"row"}}>
      <HeaderComp />
      <h1>Learning Typescript</h1>
      {/* memanggil komponen yg ada di Welcome.tsx */}
      {/* menggunakan self closing tag pada Welcome */}
      <ProfileCard Name="Ado" Job="Junior Software Engineer" Birth={2000}/>
      <ProfileCard Name="Fadhol" Job="Lecturer" Birth={2000}/>
      <ProfileCard Name="Dara" Job="Architect" Birth={2000}/>
      <ProfileCard Name="Wbr" Job="Soldier" Birth={1972}/>
      <Welcome />
    </div>
  )
}
// di export sebagai "App" untuk pemanggilan
export default App;