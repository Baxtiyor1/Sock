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
              We offer wholesale deliveries of socks from Uzbekistan made of
              high quality materials at a low price to Perth Airport (WA) and
              other states of Australia. We can produce socks of any
              composition, design and color at the request of the customer. Our
              product is made from 100% cotton. Uzbek cotton is of excellent
              quality. Terms of payment letter of credit.
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
