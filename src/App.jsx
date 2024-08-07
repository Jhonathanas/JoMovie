import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actor from "./pages/Actor";
import Series from "./pages/Series";
import PerMovie from "./pages/PerMovie";
function App() {
  return (
    <div
      className="App bg-gradient-to-tl from-black via-slate-800 to-slate-950 "
    >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/actor" element={<Actor />} />
          <Route path="/movie/:id" element={<PerMovie />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
