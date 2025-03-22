import { MoneyIcon } from "../../../../../../assets/icons/MoneyIcon";
import Button from "../../../../../componentUI/Button";
import "./index.sass";

const Card = ({ img }: { img: string }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="card image" className="card__img" />
        <span className="card__time">1h 20m 10s</span>
      </div>

      <h3 className="card__name">Sun glass</h3>

      <div className="card__bottom">
        <div className="card__price">
          <span className="card__current-bid">Current bid</span>
          <span className="card__current-price">
            <MoneyIcon /> 3.20
          </span>
        </div>
        <Button variant="dark">Place bid</Button>
      </div>
    </div>
  );
};

export default Card;
