import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Forget from "./Pages/Forget";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Forget" element={<Forget />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
