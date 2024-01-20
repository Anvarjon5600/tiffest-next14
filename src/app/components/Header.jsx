import award from "../assets/images/award.webp";
import date from "../assets/totalImages/banner-date-ru-e1f89997.png";
import year from "../assets/totalImages/banner-ru-f96c4b00.png";
import bgImg from "../assets/images/svgfon.svg";
import "../assets/styles/header.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className="header">
      <div className="header-image">
        <Image src={bgImg} fill  alt="header background" />
      </div>
      <div className="container">
        <div className="header">
          <div className="header-left left-img">
            <Image className="left-img__image" objectFit="contain" src={award} alt="award img" />
          </div>
          <div className="header-right right-img">
            <Image className="right-img__first" src={year} alt="year img" />
            <Image className="right-img__second"  src={date} alt="year img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
