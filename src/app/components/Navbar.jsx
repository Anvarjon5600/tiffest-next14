"use client";

import { useState } from "react";
import { Select } from 'antd';

import {
  ArrowIcon,
  FacebookIcon,
  InstIcon,
  MenuIcon,
  TelegramIcon,
  YouTube,
  Close,
} from "../assets/icons";
import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";
import Image from "next/image";



const Navbar = () => {
  const [active, setActive] = useState(true);

  const handleClick = (e) => {
    setActive((e) => !e);
  };

  const openMenu = () => {
    const navManu = document.querySelector(".responsive__menu");
    navManu.style.display = "block";
  };

  const closeMenu = () => {
    const navManu = document.querySelector(".responsive__menu");
    navManu.style.display = "none";
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar__flex">
          <div className="nav__logo">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="navbar__link">
            <li className="nav__link">
              <a href="#">Новости</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#">Кинопоказы</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#">Лица</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#">Программа</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#">Медиа</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#">История</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#">Локации</a>
              <span className="nav__underline"></span>
            </li>
          </ul>
          <ul className="nav__social">
            <li className="social__link">
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="#">
                <InstIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="#">
                <TelegramIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="#">
                <YouTube />
              </a>
            </li>
            <li className="change__language">
              <p onClick={(e) => handleClick(e)}>
                Ru <ArrowIcon />
              </p>
              <div className="language__drop">
                <button
                  onClick={(e) => handleClick(e)}
                  className={active ? "unactive__btn" : ""}
                >
                  Uz
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className={active ? "unactive__btn" : ""}
                >
                  Eng
                </button>
              </div>
            </li>
          </ul>
          <div onClick={openMenu} className="navbar__menu">
            <MenuIcon />
          </div>

          <div className="responsive__menu">
            <div onClick={closeMenu} className="close__icon">
              <Close />
            </div>
            <div className="res__nav__logo">
              <Image src={logo} alt="logo" />
            </div>
            <ul className="res__navbar__link">
              <li className="res__nav__link">
                <a href="#">Новости</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link">
                <a href="#">Кинопоказы</a>
                <ArrowIcon />
              </li>
              <li className="res__nav__link">
                <a href="#">Лица</a>
                <ArrowIcon />
              </li>
              <li className="res__nav__link">
                <a href="#">Программа</a>
                <ArrowIcon />
              </li>
              <li className=" res__nav__link">
                <a href="#">Медиа</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link">
                <a href="#">История</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link">
                <a href="#">Локации</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__change__language">
                <p onClick={(e) => handleClick(e)}>
                  Ru <ArrowIcon />
                </p>
                <div className="res__language__drop">
                  <button
                    onClick={(e) => handleClick(e)}
                    className={active ? "unactive__btn" : ""}
                  >
                    Uz
                  </button>
                  <button
                    onClick={(e) => handleClick(e)}
                    className={active ? "unactive__btn" : ""}
                  >
                    Eng
                  </button>
                </div>
              </li>
            </ul>
            <ul className="res__nav__social">
              <li className="res__social__link">
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="#">
                  <InstIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="#">
                  <TelegramIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="#">
                  <YouTube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
