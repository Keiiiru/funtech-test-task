import BottomBaner from "./subComponents/BottomBanner";
import HeroAnimatedBanner from "./subComponents/HeroAnimatedBanner";
import HeroHeader from "./subComponents/HeroHeader";
import Slider from "./subComponents/Silder";
import "./index.sass";

const MainContent = () => {
  return (
    <div className="main-content" style={{ overflowX: "hidden" }}>
      <div className="main-content__hero-content">
        <HeroHeader />
        <HeroAnimatedBanner />
      </div>
      <Slider />
      <BottomBaner />
    </div>
  );
};

export default MainContent;
