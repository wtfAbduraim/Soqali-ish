import React from "react";
import "./Hero.scss";
import Dot from "../../../Lib/Pricing's-Img/Dot.svg";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="container">
        <div className="container" data-aos-anchor-placement="center-bottom">
          <h1 className="hero__heading">Own your audience.</h1>
          <h2 className="hero__heading-2">So you don't lose them.</h2>

          <div className="hero__info">
            <h3 className="hero__title">
              Turn your audience into email and text message subscribers.
            </h3>
          </div>

          <div className="hero__flex">
            <button className="hero__button">Get Started Now</button>
            <button className="hero__botton">View A Demo</button>
          </div>

          <p className="hero__text">
            <img src={Dot} alt="dot" width={28} height={28} />
            <span className="hero__number">1000+</span>creators have already
            started
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
