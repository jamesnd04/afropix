import { useEffect } from "react";
import ThreeScene from "../components/ThreeScene";
import Countdown from "../components/Countdown";
import ExecutiveBoard from "../components/ExecutiveBoard";
import "./Home.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <ThreeScene />
      <div className="home-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-main">AfroPix</span>
              <span className="hero-title-sub">Symposium 2026</span>
            </h1>
            <p className="hero-description">
              An annual day-long symposium hosted by Black in Technology (BiT) .
              Join us for a pre-professional/technical event featuring a keynote
              speaker, workshops, sponsor fair, and alumni panel, plus our
              second-ever mini-hackathon!
            </p>
            <Countdown />
          </div>
        </section>

        <section className="registration-section">
          <div className="registration-content">
            <h2 className="registration-title">Register for AfroPix 2026</h2>
            <p className="registration-description">
              Join us for an incredible day of learning, networking, and
              innovation. Register now to secure your spot!
            </p>
            <div className="typeform-container">
              <iframe
                id="typeform-full"
                width="100%"
                height="600"
                frameBorder="0"
                src="https://form.typeform.com/to/v4rNylgN"
                className="typeform-iframe"
                title="AfroPix Registration Form"
              ></iframe>
            </div>
          </div>
        </section>

        <ExecutiveBoard />
      </div>
    </div>
  );
}

export default Home;
