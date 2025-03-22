import Button from "../../../componentUI/Button";
import "./index.sass";

const HeroHeader = () => {
  return (
    <div className="hero-header">
      <span className="hero-header__info">OVER 1M CREATORS</span>
      <h1 className="hero-header__header">Discover And Create NFTs</h1>
      <p className="hero-header__text">
        Discover, Create and Sell NFTs On Our NFT Marketplace With Over
        Thousands Of NFTs And Get a <strong>$20 bonus.</strong>
      </p>
      <div className="hero-header__buttons">
        <Button variant="dark">EXPLORE MORE</Button>
        <Button variant="light">CREATE NFT</Button>
      </div>
      <div className="hero-header__stats">
        <div className="hero-header__stat">
          <h3 className="hero-header__number">430K+</h3>
          <span className="hero-header__text">Art Works</span>
        </div>
        <div className="hero-header__stat">
          <h3 className="hero-header__number">159K+</h3>
          <span className="hero-header__text">Creators</span>
        </div>
        <div className="hero-header__stat">
          <h3 className="hero-header__number">87K+</h3>
          <span className="hero-header__text">Collections</span>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
