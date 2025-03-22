import { useState } from "react";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { WaveIcon } from "../../assets/icons/WaveIcon";
import Button from "../componentUI/Button";
import "./index.sass";
import MobileMenu from "./subComponents";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__content">
        <nav className="header__navigation">
          <button className="header__logo">
            <WaveIcon color="black" />
            <span className="header__logo-text">DiveSea</span>
          </button>

          <a href="#">DISCOVER</a>
          <a href="#">CREATORS</a>
          <a href="#">SELL</a>
          <a href="#">STATS</a>
        </nav>

        <button
          className="header__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </button>

        <Button variant="dark" className="header__wallet-btn">
          CONNECT WALLET
        </Button>
      </div>
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default Header;
