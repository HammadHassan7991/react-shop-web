import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.compent";

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
  )
};

export default App;
