import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import "./Footer.scss";
import HeaderLogo from "../../Lib/Header-logo.svg";

function Header() {
  return (
    <>
      <header className="header footer">
        <div className="container">
          <NavLink className="header__info footer__info" to="Pricing">
            <img
              className="header__logo footer__logo"
              src={HeaderLogo}
              alt="logo"
              width={45}
              height={42}
            />
            <h2 className="header__heading__logo footer__heading">Marico</h2>
          </NavLink>

          <nav className="header__nav footer__nav">
            <NavLink className="header__link footer__link" to="UseCases">
              Use Cases
            </NavLink>

            <NavLink className="header__link footer__link" to="About">
              About
            </NavLink>

            <NavLink className="header__link footer__link" to="Pricing">
              Pricing
            </NavLink>

            <NavLink className="header__link footer__link" to="Blog">
              Blog
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
