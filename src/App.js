import "./App.css";
import Header from "./components/Header";
import ProjectScreen from "./components/ProjectScreen";
import DemoCarousel from "./components/Carousel";
import DemoCarouseldata from "./components/Carouseldata";
import Footer from "./components/Footer";
function App() {
  
  return (
    <div className="maindiv">
      <Header />
      <ProjectScreen />
      <div className="carousalDiv">
        <DemoCarousel data={DemoCarouseldata} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
