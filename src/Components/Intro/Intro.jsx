//SASS
import "./Intro.scss";

//Images
import intro__fon from "../../Assets/Images/intro_fon.png";

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__aside">
            <h1 className="intro__title">
            You can find quality and cheap socks only from us
            </h1>
            <p className="intro__text">
              We offer wholesale delivery of socks made of high quality
              materials to Istanbul (Turkey) ports. We can produce socks of any
              composition, design and color according to the customer's request.
              Our product is made of 100% cotton. The quality of Uzbek cotton is
              excellent.
            </p>
          </div>
          <div className="intro__bside">
            <img className="intro__pic" src={intro__fon} alt="intro_image" />
          </div>
        </div>
      </div>
      <div className="intro__button-bg"></div>
    </section>
  );
}

export default Intro;
