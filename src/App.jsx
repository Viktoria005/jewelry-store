import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Singup from "./components/singup/singup";

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
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route index element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
