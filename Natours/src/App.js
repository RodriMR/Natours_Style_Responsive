import "./sass/main.scss";
import "./css/icon-font.css";
import logoWhite from "./img/logo-white.png";

function App() {
  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>
                Your benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>
                Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>
                Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>
                Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="header">
        <div className="header__logo-box">
          <img src={logoWhite} alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub"> is where life happens</span>
          </h1>
          <a href="#section-tours" className="btn btn--white btn--animated">
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
                  autem.Et accusantium autem quo nostrum velit.
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
                  autem.Et accusantium autem quo nostrum velit.
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
                  autem.Et accusantium autem quo nostrum velit.
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
                  autem.Et accusantium autem quo nostrum velit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front card__side--front-1">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      The sea explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front card__side--front-2">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      The forest hiker
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>7 day tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front card__side--front-3">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      The sea explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>
        <section className="section-stories">
          <div className="bg-video">
            <video
              className="bg-video__content"
              autoPlay="true"
              muted="true"
              loop
            >
              <source src={require("../src/img/video.mp4")} type="video/mp4" />
              <source
                src={require("../src/img/video.webm")}
                type="video/webm"
              />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  className="story__image"
                  src={require("../src/img/nat-8.jpg")}
                  alt=""
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Ea consectetur hic magni aspernatur id adipisci repellat est
                  quidem laboriosam? Est consequatur tempora ut maiores quia et
                  itaque debitis aut consectetur recusandae et soluta porro ex
                  reprehenderit dolorum. Et rerum odit aut dolores excepturi eos
                  nisi quam.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  className="story__image"
                  src={require("../src/img/nat-9.jpg")}
                  alt=""
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Ea consectetur hic magni aspernatur id adipisci repellat est
                  quidem laboriosam? Est consequatur tempora ut maiores quia et
                  itaque debitis aut consectetur recusandae et soluta porro ex
                  reprehenderit dolorum. Et rerum odit aut dolores excepturi eos
                  nisi quam.
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="" className="btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full name"
                      required
                      id="name"
                      autocomplete="off"
                    />
                    <label for="name" htmlFor="" className="form__label">
                      Full name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      required
                      id="email"
                      autocomplete="off"
                    />
                    <label for="email" htmlFor="" className="form__label">
                      Email adress
                    </label>
                  </div>
                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label for="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label for="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">Next Step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__logo-box">
          <img
            src={require("../src/img/logo-green-2x.png")}
            alt=""
            className="footer__logo"
          />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="" className="footer__link">
                {" "}
                Rodrigo Molina{" "}
              </a>{" "}
              for his online course
              <a href="" className="footer__link">
                Advanced CSS and Sass
              </a>
              . Copyrigth &copy; by Jonas Schmedtmann
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img
              className="popup__img"
              src={require("../src/img/nat-8.jpg")}
              alt="Tour photo"
            />
            <img
              className="popup__img"
              src={require("../src/img/nat-9.jpg")}
              alt="Tour photo"
            />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet. Non accusamus ducimus ut aspernatur
              temporibus eos eaque unde et labore consequatur quo Quis fugiat
              cumque vel ratione porro! A voluptatum molestias ex quis eligendi
              temporibus sint sed labore temporibus. Vel earum quia ab
              aspernatur blanditiis sed quia consequuntur sed blanditiis
              consequuntur vel possimus impedit et voluptas unde. Sit quidem
              mollitia aut corrupti provident est omnis explicabo. Sit dolores
              neque est eligendi eaque est facilis blanditiis repellendus eius
              et nihil galisum. Id modi laboriosam aut maxime minus et
              voluptatem tenetur ut delectus provident hic exercitationem sunt
              aut voluptas facilis. consequuntur vel possimus impedit et
              voluptas unde. Sit quidem mollitia aut corrupti provident est
              omnis explicabo. Sit dolores neque est eligendi eaque est facilis
              blanditiis repellendus eius et nihil galisum. Id modi laboriosam
              aut maxime minus et voluptatem tenetur ut delectus provident hic
              exercitationem sunt aut voluptas facilis. consequuntur vel
              possimus impedit et voluptas unde.
            </p>
            <a href="#" className="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
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
