import "./sass/main.scss";
import "./css/icon-font.css";
import logoWhite from "./img/logo-white.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={logoWhite} alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub"> is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tour for adventorous people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Aut pariatur quas eum sint molestiae eos iste nemo. Et quas
                quisquam a voluptate tempore quo modi nihil aut autem provident
                et expedita quam et minima dolor et rerum porro?
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Et eius vero eum velit quae aut voluptatem quaerat. Eos atque
                quia aut ipsum assumenda ut reiciendis accusantium non nihil
                autem est quibusdam odio non repellat officia. Est dolor
                maiores.
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={require("./img/nat-1-large.jpg")}
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={require("./img/nat-2-large.jpg")}
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={require("./img/nat-3-large.jpg")}
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text ">
                  Qui rerum facere sed ipsum impedit ab natus quod a consequatur
                  autem.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet Nature
                </h3>
                <p className="feature-box__text ">
                  Qui rerum facere sed ipsum impedit ab natus quod a consequatur
                  autem.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text ">
                  Qui rerum facere sed ipsum impedit ab natus quod a consequatur
                  autem.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text ">
                  Qui rerum facere sed ipsum impedit ab natus quod a consequatur
                  autem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <section className="grid-test">
        <div className="row">
          <div className="col-1-of-2">Col 1 of 2</div>
          <div className="col-1-of-2">Col 1 of 2</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-2-of-3">Col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-2-of-4">Col 2 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-3-of-4">Col 3 of 4</div>
        </div>
      </section> */}
    </>
  );
}

export default App;
