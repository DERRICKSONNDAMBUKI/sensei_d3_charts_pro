import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { AlphabetBar } from "./pages/alphabet/AlphabetBar";
import { Home } from "./pages/home/Home";
import { Unemployment } from "./pages/unemployment/Unemployment";
import { WorldMap } from "./pages/worldMap/WorldMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/worldmappoints" element={<WorldMap/>}/>
        <Route path="/unemployment" element={<Unemployment/>}/>
        <Route path="/barchart" element={<AlphabetBar/>}/>

        {/* no route */}
        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>There's nothing here!</h1>
              <Link to={"/"}>
                <button
                  style={{
                    textDecoration: "none",
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Go Back Home
                </button>
              </Link>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
