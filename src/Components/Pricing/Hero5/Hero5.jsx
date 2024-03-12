import React from "react";
import "./Hero5.scss";
import Step5 from "../../../Lib/Pricing's-Img/Step5.png";

function Hero5() {
  return (
    <div>
      <section className="hero3">
        <div className="container">
          {/* <div className="hero3__info">
            <h3 className="hero3__step">STEP 3</h3>
            <h2 className="hero3__heading">Send Emails & Text Messages</h2>
            <p className="hero3__text-1">
              No more going through a social platform. Reach and engage your
              audience directly over email and text massage.
            </p>
            <button className="hero3__button">View Avaliable Sources</button>
          </div> */}

          <ul className="hero3__list">
            <li className="hero3__item">
              <h5 className="hero3__title">Create & Share</h5>
              <h3 className="hero3__comment ">Reach Your</h3>
              <h3 className="hero3__comment topp">
                Audience <span className="hero3__span">Directly.</span>
              </h3>
              <p className="hero3__text">
                <span className="hero3__oval">1 </span>Embed content or create
                something new to share.
              </p>{" "}
              <p className="hero3__text topp-2">
                <span className="hero3__oval">2 </span>Share content over email,
                text message or your homepage.
              </p>
              <div className="hero3__flex">
                <button className="hero3__boton">Get Started Now</button>
                <button className="hero3__botton">View A Demo</button>
              </div>
            </li>

            <li className="hero3__item-2">
              <img
                className="hero3__img"
                src={Step5}
                alt="img"
                width={590}
                height={500}
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hero5;
