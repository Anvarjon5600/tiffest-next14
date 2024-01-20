import SectionTitle from "../components/SectionTitle";
import img1 from "../assets/images/media/1.svg";
import img2 from "../assets/images/media/2.svg";
import img3 from "../assets/images/media/3.svg";
import img4 from "../assets/images/media/4.svg";
import img5 from "../assets/images/media/5.svg";
import img6 from "../assets/images/media/6.svg";
import img7 from "../assets/images/media/7.svg";
import img8 from "../assets/images/media/8.svg";
import img9 from "../assets/images/media/9.svg";

import video1 from "../assets/images/media-video/1.svg";
import video2 from "../assets/images/media-video/2.svg";
import video3 from "../assets/images/media-video/3.svg";
import video4 from "../assets/images/media-video/4.svg";
import video5 from "../assets/images/media-video/5.1.svg";
import video6 from "../assets/images/media-video/6.svg";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import "../assets/styles/media-section.css";
import Image from "next/image";
const MediaSection = () => {
  return (
    <section className="media__section">
      {/* <Image src={shape1} alt="shape 1" className="section__img__one position absolute w-full top-0 left-0" /> */}
      {/* <Image src={shape2} alt="shape 2" className="section__img__two position absolute w-full top-0 left-0" /> */}
      {/* <Image src={shape3} alt="shape3" className="section__img__three position absolute w-full top-0 left-0"/> */}
      <div className="container">
        <div className="actiors__section__flex">
          <SectionTitle title="Медиа" />
          <select className="media-select__date">
            <option value="1">2023</option>
            <option value="1">2022</option>
            <option value="1">2020</option>
            <option value="1">2018</option>
          </select>
        </div>

        <div className="media-photos">
          <div className="media__title__flex">
            <p>Фотографии</p>
            <p>Смотереть</p>
          </div>
          <div className="media__section__line"></div>

          <div className="media__section__grid__one">
            <div className="grid__one__item-1 grid__item">
              <Image src={img1} alt=" img 1" />
            </div>
            <div className="grid__one__item-2 grid__item">
              <Image src={img3} alt=" img 1" />
            </div>
            <div className="grid__one__item-3 grid__item">
              <Image src={img4} alt=" img 1" />
            </div>
            <div className="grid__one__item-4 grid__item">
              <Image src={img6} alt=" img 1" />
            </div>
            <div className="grid__one__item-5 grid__item">
              <Image src={img7} alt=" img 1" />
            </div>
            <div className="grid__one__item-6 grid__item">
              <Image src={img9} alt=" img 1" />
            </div>
            <div className="grid__one__item-7 grid__item">
              <Image src={img2} alt=" img 1" />
            </div>
            <div className="grid__one__item-8 grid__item">
              <Image src={img5} alt=" img 1" />
            </div>
            <div className="grid__one__item-9 grid__item">
              <Image src={img8} alt=" img 1" />
            </div>
          </div>
        </div>

        <div className="media-video">
          <div className="media__title__flex">
            <p>Видео</p>
            <p>Смотереть</p>
          </div>
          <div className="media__section__line"></div>
          <div className="media__section__grid__two">
            <div className="grid__two__item-1 grid__item2">
              <Image src={video1} alt=" img 1" />
            </div>
            <div className="grid__two__item-2 grid__item2">
              <Image src={video2} alt=" img 1" />
            </div>
            <div className="grid__two__item-3 grid__item2">
              <Image src={video3} alt=" img 1" />
            </div>
            <div className="grid__two__item-4 grid__item2">
              <Image src={video4} alt=" img 1" />
            </div>
            <div className="grid__two__item-5 grid__item2">
              <Image src={video5} alt=" img 1" />
            </div>
            <div className="grid__two__item-6 grid__item2">
              <Image src={video6} alt=" img 1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MediaSection;
