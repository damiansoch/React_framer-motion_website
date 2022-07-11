import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./compound/Nav";
import Home from "./compound/Pages/Home";
import About from "./compound/Pages/About";
import Gallery from "./compound/Pages/Gallery";
import Contact from "./compound/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
