import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Main page</h1>
                <h1>This is an app</h1>
                <p>This is paragraph text</p>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <h1>
                  No page found<Link to="/">Home</Link>
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
