import React from "react";
import "./Hero2.scss";

function Hero2() {
  return (
    <div>
      <section className="hero2" data-aos="fade-up">
        <div className="container">
          <div className="container" data-aos-anchor-placement="center-bottom">
            <h2 className="hero2__heading">Why Creators Love Marico</h2>
            <ul className="hero2__list">
              <li className="hero2__item">
                <h3 className="hero2__title">😊 Reduced Anxiety</h3>
                <p className="hero2__text">
                  Never worry about losing your audience.
                </p>
              </li>

              <li className="hero2__item">
                <h3 className="hero2__title">😆 Lower Workload</h3>
                <p className="hero2__text">
                  Just share one link. We'll handle the rest.
                </p>
              </li>

              <li className="hero2__item">
                <h3 className="hero2__title">😁 More Time</h3>
                <p className="hero2__text">
                  Spend less time on marketing tools
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero2;
