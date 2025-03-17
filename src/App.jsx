import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signupe" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
