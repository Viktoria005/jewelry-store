import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Signup from "./components/singup/signup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() { 
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Main />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
