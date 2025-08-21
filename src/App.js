import "./App.css";
import Header from "./components/Header";
import RenderProject from "./components/RenderProject";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="maindiv">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<RenderProject />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
