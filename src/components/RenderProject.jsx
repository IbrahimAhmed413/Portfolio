import ProjectScreen from "./ProjectScreen";
import "../App.css";
import DemoCarouseldata from "./Carouseldata";
import Carousel from "./Carousel";
const RenderProject = () => {
  return (
    <>
      <ProjectScreen
        h1="My"
        dh1="Top Projects"
        div="Showcasing my most impactful work that solve real-world problems"
      />
      <div className="carousalDiv">
        <Carousel data={DemoCarouseldata} />
      </div>
    </>
  );
};
export default RenderProject;
