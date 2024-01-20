import Image from "next/image";
import { BigArrow } from "../assets/icons";
import "../assets/styles/news-card.css";

const NewsCard = ({ imgUrl, desc }) => {
  return (
    <div className="news__card">
      <div className="card__img">
        <Image src={imgUrl} alt="news img"/>
      </div>
      <div className="card__desc">
        <p>{desc}</p>
        <div>
          <span>12.04.2023</span>
          <div className="news-card__flex">
            <a href="#">Перейти </a>
            <BigArrow />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
