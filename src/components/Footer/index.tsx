import "./index.sass";
import BottomSide from "./subComponents/BottomSide";
import MiddleSide from "./subComponents/MiddleSide";
import TopSide from "./subComponents/TopSide";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <TopSide />
        <MiddleSide />
      </div>
      <BottomSide />
    </div>
  );
};

export default Footer;
