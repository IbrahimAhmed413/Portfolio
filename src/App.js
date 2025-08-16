import "./App.css";
import Header from "./components/Header";
import ProjectScreen from "./components/ProjectScreen";
import DemoCarousel from "./components/Carousel";
import PaperAi from "./assets/PaperAi.png";
import PPAISystem from "./assets/PPAIsystem.png";
import synccareimage from "./assets/synccareimage.jpg";
function App() {
  return (
    <div className="maindiv">
      <Header />
      <ProjectScreen />
      <div className="carousalDiv">
        <DemoCarousel
          img={PaperAi}
          name="Past-Paper-AI"
          para="PastPaperAI Built a static website for an AI-powered study platform that provides instant access to past exam papers, AI-generated solutions, and personalized practice to help students prepare smarter for exams."
          live="https://pastpaperai.com/"
          code="https://github.com/dashboard"
        />
        <DemoCarousel
          img={PPAISystem}
          name="Past-Paper-AI"
          para="PastPaperAI is an AI-powered study platform that provides students with instant access to past exam papers across multiple subjects.
It uses artificial intelligence to generate solutions, explanations, and personalized practice based on user performance.
The platform helps learners identify weak areas, improve revision efficiency, and prepare smarter for exams."
          live="https://pastpaperai.com/login"
          code="https://github.com/dashboard"
        />
        <DemoCarousel
          img={synccareimage}
          name="Sync-Care"
          para="Syncare System is a medical billing and patient management platform.
I built the frontend with role-based dashboards for doctors and patients.
The interface is responsive, user-friendly, and designed for efficient insurance detail management.
This project highlights my skills in React, modern UI design, and frontend best practices."
          live="http://syncaresystems.com/syncare-frontend"
          code="https://github.com/dashboard"
        />
      </div>
    </div>
  );
}

export default App;
