import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import HeaderLogo from "../../Lib/Header-logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink className="header__info" to="Pricing">
            <img
              className="header__logo"
              src={HeaderLogo}
              alt="logo"
              width={45}
              height={42}
            />
            <h2 className="header__heading__logo">Marico</h2>
          </NavLink>
          <nav className="header__nav">
            <NavLink className="header__link" to="UseCases">
              Use Cases
            </NavLink>

            <NavLink className="header__link" to="About">
              About
            </NavLink>

            <NavLink className="header__link" to="Pricing">
              Pricing
            </NavLink>

            <NavLink className="header__link" to="Blog">
              Blog
            </NavLink>
          </nav>

          <div className="header__inner">
            <select className="header__select">
              <option className="header__option" value="en">
                EN
              </option>
              <option className="header__option" value="ru">
                RU
              </option>
              <option className="header__option" value="uz">
                UZ
              </option>
            </select>

            <select className="header__select">
              <option className="header__option" value="en">
                Dark
              </option>
              <option className="header__option" value="ru">
                Light
              </option>
            </select>
            <a className="header__button" href="#">
              Login
            </a>
            <button className="header__botton">Sing Up</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
