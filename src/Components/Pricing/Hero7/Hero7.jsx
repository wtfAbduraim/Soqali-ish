import React from "react";
import "./Hero7.scss";
import Logo from "../../../Lib/Header-logo.svg";
import Dot from "../../../Lib/Pricing's-Img/Dot.svg";

function Hero7() {
  return (
    <div>
      <section className="hero7">
        <div className="container">
          <img src={Logo} alt="logo" width={100} height={100} />
          <h4 className="hero7__heading">Get Started Now</h4>
          <p className="hero7__text">
            Setup is easy and takes under 5 minutes.
          </p>
          <button className="hero__button">Get Started Now</button>
          <p className="hero__text">
            <img src={Dot} alt="dot" width={28} height={28} />
            <span className="hero__number">1000+</span>creators have already
            started
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero7;
