import React from "react";

function App() {
  const [navState, setNavState] = React.useState(false);

  function handleNav() {
    setNavState((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      {navState ? (
        <div>
          <div className="burger-menu">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
          <div className="burger-container" onClick={handleNav}></div>
        </div>
      ) : null}
      <nav className="navbar">
        <div className="nav-container">
          <img className="nav-logo" src="images/logo.svg" alt="logo" />
          <div className="nav-tags">
            <p>
              Home
              <span className="nav-hover" />
            </p>
            <p>
              About <span className="nav-hover" />
            </p>

            <p>
              Contact <span className="nav-hover" />
            </p>
            <p>
              Blog <span className="nav-hover" />
            </p>
            <p>
              Careers <span className="nav-hover" />
            </p>
          </div>
          <div className="nav-button">Request Invite</div>
          {window.innerWidth <= 850 ? (
            <img
              src={
                navState ? "images/icon-close.svg" : "images/icon-hamburger.svg"
              }
              alt="ham"
              className={navState ? "close-icon" : "hamburger-icon"}
              onClick={handleNav}
            />
          ) : null}
        </div>
      </nav>
      <section className="cta-section">
        <img className="phone-img" src="images/image-mockups.png" alt="phone" />
        <div className="cta-text">
          <div className="cta-text-container">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your EasyBank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <div className="cta-button">Request Invite</div>
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="why-header">
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br />
            Control your finances like never before.
          </p>
        </div>
        <div className="why-cards">
          <div className="why-card">
            <img src="images/icon-online.svg" />
            <h1>Online Banking</h1>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="why-card">
            <img src="images/icon-online.svg" />
            <h1>Simple Budgeting</h1>
            <p>
              See exactly where your money goes each month. Recieve
              notifications when you're close to hitting your limits.
            </p>
          </div>
          <div className="why-card">
            <img src="images/icon-online.svg" />
            <h1>Fast Onboarding</h1>
            <p>
              We don't do branches.Open your account in minutes and start taking
              control of your finances right away.
            </p>
          </div>
          <div className="why-card">
            <img src="images/icon-online.svg" />
            <h1>Open API</h1>
            <p>
              Manage your savings, investments, pension and much more from one
              account.Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <h1>Latest Articles</h1>
        <div className="article-container">
          <div className="article">
            <div className="article-image">
              <img src="images/image-currency.jpg" />
            </div>
            <div className="article-text">
              <p className="article-author">By Claire Robinson</p>
              <h1>Recieve money in any currency with no fees</h1>
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only recieve money in a single...
              </p>
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src="images/image-restaurant.jpg" />
            </div>
            <div className="article-text">
              <p className="article-author">By Wilson Hutton</p>
              <h1>Treat yourself withour worrying about money</h1>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src="images/image-plane.jpg" />
            </div>
            <div className="article-text">
              <p className="article-author">By Wilson Hutton</p>
              <h1>Take your Easybank card wherever you go</h1>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show
                you...
              </p>
            </div>
          </div>
          <div className="article">
            <div className="article-image">
              <img src="images/image-confetti.jpg" />
            </div>
            <div className="article-text">
              <p className="article-author">By Claire Robinson</p>
              <h1>Our invite-only Beta accounts are now live!</h1>
              <p>
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer-text">
          <div className="footer-logos">
            <img src="images/logo-white.svg" alt="logo" />
            <div className="footer-socials">
              <img
                src="images/icon-facebook.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "images/facebook-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "images/icon-facebook.svg")
                }
                alt="facebook"
              />
              <img
                src="images/icon-twitter.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "images/twitter-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "images/icon-twitter.svg")
                }
                alt="twitter"
              />
              <img
                src="images/icon-pinterest.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "images/pinterest-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "images/icon-pinterest.svg")
                }
                alt="pinterest"
              />
              <img
                src="images/icon-instagram.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "images/instagram-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "images/icon-instagram.svg")
                }
                alt="instagram"
              />
              <img
                src="images/icon-youtube.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "images/youtube-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "images/icon-youtube.svg")
                }
                alt="youtube"
              />
            </div>
          </div>
          <div className="footer-tags">
            <div className="footer-tags-col">
              <p>About Us</p>
              <p>Contact</p>
              <p>Blog</p>
            </div>
            <div className="footer-tags-col">
              <p>Careers</p>
              <p>Support</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="footer-button">Request Invite</div>
      </section>
    </>
  );
}

export default App;
