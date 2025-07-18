import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Com64 from "./pages/Com64";
import Windows from "./pages/Windows";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/tpdkr_sandbox/"
            element={
              <div>
                <h1>Main page</h1>
                <h1>This is an app sandbox where i try things out</h1>
                <p>This is paragraph text</p>
              </div>
            }
          />
          <Route path="/tpdkr_sandbox/buttons" element={<Buttons />} />
          <Route path="/tpdkr_sandbox/com64" element={<Com64 />} />
          <Route path="/tpdkr_sandbox/windows" element={<Windows></Windows>} />
          <Route
            path="*"
            element={
              <div>
                <h1>
                  No page found<Link to="/tpdkr_sandbox/">Home</Link>
                </h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
