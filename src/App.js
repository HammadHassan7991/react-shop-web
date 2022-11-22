import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.compent";
import Navbar from "./routes/Navbar/Navbar.component";


const Shop = () => {
  return (
    <div>
      <h1>I am Shop Page</h1>
    </div>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  )
};

export default App;
