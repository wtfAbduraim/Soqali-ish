import React from "react";
import "./Hero4.scss";
import Step1 from "../../../Lib/Pricing's-Img/Step_2-1.png";

function Hero4() {
  return (
    <div>
      <section className="hero4">
        <div className="container">
          {/* <div className="hero3__info">
            <h3 className="hero3__step">STEP 2</h3>
            <h2 className="hero3__heading">Share Your Homepage</h2>
            <p className="hero3__text-1">
              Share your Wavium homepage link with your followers, and we'll
              handle the rest.
            </p>
          </div> */}

          <div className="hero4__info">
            <img
              className="hero4__img"
              src={Step1}
              alt=""
              width={700}
              height={500}
            />

            <div className="hero4__flex">
              <h5 className="hero4__title">Collect Subscribers</h5>
              <h3 className="hero4__heading">Emails. Phone #s.</h3>
              <h3 className="hero4__heading-1">All Yours.</h3>
            </div>
          </div>

          <button className="hero3__boton hero4__button">Get Started </button>
        </div>
      </section>
    </div>
  );
}

export default Hero4;
