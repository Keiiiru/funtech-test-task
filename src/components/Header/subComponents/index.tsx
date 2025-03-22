import { FacebookIcon } from "../../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../../assets/icons/InstagramIcon";
import { LinkedInIcon } from "../../../assets/icons/LinkedInIcon";
import { XIcon } from "../../../assets/icons/XIcon";
import Button from "../../componentUI/Button";
import "./index.sass";

const MobileMenu = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <button
          className="mobile-menu__close"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
      </div>

      <nav className="mobile-menu__nav">
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          DISCOVER
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          CREATORS
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          SELL
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          STATS
        </a>

        <div className="top-side__social-media">
          <InstagramIcon />
          <LinkedInIcon />
          <FacebookIcon />
          <XIcon fill="#535353" />
        </div>

        <Button variant="dark" className="mobile-menu__wallet-btn">
          CONNECT WALLET
        </Button>
      </nav>
    </div>
  );
};

export default MobileMenu;
