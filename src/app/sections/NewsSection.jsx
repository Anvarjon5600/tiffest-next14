'use client'
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img from "../assets/images/news/swiper-firsr.svg";
import img2 from "../assets/images/news/swiper-second.svg";
import img3 from "../assets/images/news/swiper-third.svg";
import img4 from "../assets/images/news/swiper-fourth.svg";
import "../assets/styles/news-section.css";
const NewsSection = () => {
  const data = [
    {
      img: img,
      desc: "Алдияр Байракимов, режиссер нашумевшего казахского фильма «Паралимпиец»:",
    },
    {
      img: img2,
      desc: "Аяз Салаев, известный киновед, кинорежиссер, сценарист, педагог, телеведущий, актер, заслуженный деятель искусств Республики Азербайджан:",
    },
    {
      img: img3,
      desc: "Артём Михалков, известный актёр и режиссёр:",
    },
    {
      img: img4,
      desc: "Гульбара Толомушова, известная актриса театра и кино:",
    },
    {
      img: img4,
      desc: "Гульбара Толомушова, известная актриса театра и кино:",
    },
  ];
  return (
    <section className="news__section">
      <div className="container">
        <SectionTitle title="Новости" />

        <div className="news__slider">
          <Swiper
            breakpoints={{
              200: {
                // width: 576,
                slidesPerView: 1,
              },
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              1025: {
                // width: 1025,
                slidesPerView: 3,
              },
              1200: {
                // width: 1200,
                slidesPerView: 4,
              },
            }}
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            navigation
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <NewsCard imgUrl={item.img} desc={item.desc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
