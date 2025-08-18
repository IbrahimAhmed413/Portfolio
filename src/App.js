import "./App.css";
import Header from "./components/Header";
import ProjectScreen from "./components/ProjectScreen";
import DemoCarousel from "./components/Carousel";

import DemoCarouseldata from "./components/Carouseldata";
function App() {
  
  return (
    <div className="maindiv">
      <Header />
      <ProjectScreen />
      <div className="carousalDiv">
        <DemoCarousel data={DemoCarouseldata} />
      </div>
    </div>
  );
}

export default App;
