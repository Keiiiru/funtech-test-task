import { FacebookIcon } from "../../../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../../../assets/icons/InstagramIcon";
import { LinkedInIcon } from "../../../../assets/icons/LinkedInIcon";
import { XIcon } from "../../../../assets/icons/XIcon";
import "./index.sass";

const BottomSide = () => {
  return (
    <div className="bottom-side">
      ©2023 <span> DiveSea All Rights Reserved.</span>
      <div className="bottom-side__social-media">
        <InstagramIcon />
        <LinkedInIcon />
        <FacebookIcon />
        <XIcon />
      </div>
    </div>
  );
};

export default BottomSide;
