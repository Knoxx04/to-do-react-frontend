import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Homepage'
import './App.css'
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import List from "./List";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home/>}></Route>
      <Route path= "/sign" element={<Signup/>}></Route> 
      <Route path= "/Signup" element={<Signup/>}></Route>
      <Route path= "/Login" element={<Login/>}></Route>
      <Route path= "/Dashboard" element={<Dashboard/>}></Route> 
      <Route path= "/List" element={<List/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App 