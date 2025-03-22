import { FacebookIcon } from "../../../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../../../assets/icons/InstagramIcon";
import { LinkedInIcon } from "../../../../assets/icons/LinkedInIcon";
import { WaveIcon } from "../../../../assets/icons/WaveIcon";
import { XIcon } from "../../../../assets/icons/XIcon";
import "./index.sass";

const TopSide = () => {
  return (
    <div className="top-side">
      <div className="top-side__logo">
        <WaveIcon color="#fff" />
        <span>DiveSea</span>
      </div>
      <div className="top-side__social-media">
        <InstagramIcon />
        <LinkedInIcon />
        <FacebookIcon />
        <XIcon />
      </div>
    </div>
  );
};

export default TopSide;
