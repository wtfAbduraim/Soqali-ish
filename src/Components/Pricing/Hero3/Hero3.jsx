import React from "react";
import "./Hero3.scss";
import Step from "../../../Lib/Pricing's-Img/Step.png" 

function Hero3() {
  return (
    <div>
      <section className="hero3">
        <div className="container">
          <div className="hero3__info">
            <h3 className="hero3__step">STEP 1</h3>
            <h2 className="hero3__heading">Connect Your Content</h2>
            <p className="hero3__text-1">
              Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.
            </p>
            <button className="hero3__button">View Avaliable Sources</button>
          </div>

          <ul className="hero3__list">
            <li className="hero3__item">
              <h5 className="hero3__title">Your Homepage</h5>
              <h3 className="hero3__comment ">Your Content.</h3>
              <h3 className="hero3__comment topp">
                All in <span className="hero3__span">One Spot</span>
              </h3>
              <p className="hero3__text">
                <span className="hero3__oval">1 </span>Bring all of your content
                together into one homepage.
              </p>{" "}
              <p className="hero3__text topp-2">
                <span className="hero3__oval">2 </span>Your page automatically
                updates whenever you create.
              </p>
              <div className="hero3__flex">
                <button className="hero3__boton">Get Started Now</button>
                <button className="hero3__botton">View A Demo</button>
              </div>
            </li>

            <li className="hero3__item-2">
              <img className="hero3__img" src={Step} alt="img" width={590} height={500}/>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hero3;
