import {Route , Routes } from "react-router-dom"
import Nav from "./pages/Nav/Components/Navbar"
import Main from "./pages/Main/Components/Main"
import Calc from "./pages/Calc/Components/Calc"
import Temp from "./pages/Temp/components/Degree"
import Login from "./pages/Form/components/Form"

function App() {
  return (
    <div className="App">
      <Nav/>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Calc" element={<Calc/>}/>
        <Route path="/Temp" element={<Temp/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
