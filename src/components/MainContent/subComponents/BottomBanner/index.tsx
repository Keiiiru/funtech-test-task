import Button from "../../../componentUI/Button";
import FirstImage from "../../../../assets/images/first-image.jpeg";
import "./index.sass";

const BottomBaner = () => {
  return (
    <div className="bottom-banner">
      <div className="bottom-baner__info">
        <h1 className="bottom-banner__header">Create and Sell NFTs</h1>
        <p className="bottom-banner__text">World’s Largest NFT Place</p>
        <nav className="bottom-banner__navigation">
          <Button variant="light">Explore More</Button>
          <Button variant="dark">Sell Artwork</Button>
        </nav>
      </div>
      <img
        src={FirstImage}
        alt="banner image"
        className="bottom-banner__image"
      />
    </div>
  );
};

export default BottomBaner;
