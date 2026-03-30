import { Fragment } from "react/jsx-runtime";
// mengimport component Welcome di dalam component App
import Welcome from './components/Welcome.tsx'
import HeaderComp from './components/HeaderComp.tsx'
import ProfileCard from "./components/ProfileCard.tsx";

function App() {
  // mereturn sebuah component jsx
  return (
    // bisa pakai tag <div> | <></> | <Fragment></Fragment>
    <Fragment>
      <HeaderComp />
      <h1>Watashi programmer</h1>
      {/* memanggil komponen yg ada di Welcome.tsx */}
      {/* menggunakan self closing tag pada Welcome */}
      <Welcome />
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
    </Fragment>
  )
}
// di export sebagai "App" untuk pemanggilan
export default App;