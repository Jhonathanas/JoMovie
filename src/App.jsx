import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actor from "./pages/Actor";
import Series from "./pages/Series";
import PerMovie from "./pages/PerMovie";
function App() {
  
  return (
    
    <div
      className="bg-black"
    >
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
