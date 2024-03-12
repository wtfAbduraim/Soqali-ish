import React from "react";
import "./Hero6.scss";
import HeroImg from "../../../Lib/Pricing's-Img/HeroImg.png";

function Hero6() {
  return (
    <div>
      <section className="hero6">
        <div className="container">
          <h3 className="hero6__heading">Experts Agree</h3>
          <img
            className="hero6__img"
            src={HeroImg}
            alt="img"
            width={1640}
            height={400}
          />

          <div className="hero6__background">
            <h5 className="hero6__title">
              We've helped over 1,000 creatorsre claim control of their
              audience.
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero6;
