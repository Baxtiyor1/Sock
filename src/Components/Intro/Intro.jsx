

//SASS
import "./Intro.scss"

//Images
import intro__fon from "../../Assets/Images/intro_fon.png"

function Intro() {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__wrapper">
                    <div className="intro__aside">
                        <h1 className="intro__title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                        <p className="intro__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium exercitationem esse atque tenetur? Dolor commodi quos obcaecati tenetur eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat enim doloremque non voluptate dolor at delectus illo minus quibusdam ipsam?</p>
                    </div>
                    <div className="intro__bside">
                        <img className="intro__pic" src={intro__fon} alt="intro_image" />
                    </div>
                </div>
            </div>
            <div className="intro__button-bg"></div>
        </section>
    )
}

export default Intro