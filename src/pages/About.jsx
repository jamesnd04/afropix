import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="about-title">About AfroPix Symposium</h1>
        <div className="about-hero-gradient"></div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">What is AfroPix?</h2>
          <p className="section-text">
            AfroPix is an annual day-long symposium hosted by Black in
            Technology (BiT). It is open to students across the state who are
            enrolled in computer science programs or pursuing a
            technology-related career path. We anticipate that most of our
            attendees will be local; primarily coming from UNC and other
            surrounding colleges and universities in the Carolinas.
          </p>
          <p className="section-text">
            This year, AfroPix will be held on Saturday, February 28th, and
            include a pre-professional/technical event. We will also be hosting
            our first-ever mini-hackathon! The pre-professional/technical event
            will include a keynote speaker, a workshop, a sponsor fair, and an
            alumni panel.
          </p>
          <p className="section-text">
            Our mini hackathon will allow participants to work in a team or
            individually and enhance their coding, analysis, and creativity
            skills! They will also be able to attend workshops and have mentors.
            During the event, we will offer raffles for various prizes and award
            those whose projects best align with the hackathon guidelines.
          </p>
          <p className="section-text">
            At its conclusion, we intend for AfroPix to be an impact,
            community-building, and celebratory event for studying computer
            science and other tech-related industries. Catering will be provided
            throughout the day.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Who We Are</h2>
          <div className="bit-info">
            <h3 className="bit-title">Black in Technology (BiT)</h3>
            <p className="section-text">
              Black in Technology (BiT) is a student organization at The
              University of North Carolina at Chapel Hill geared towards
              supporting Black college students pursuing a Computer Science
              degree and/or a career in technology. Recognizing that Black
              students were one of the smallest demographics in classes and at
              major tech companies, Charlie Helms and Olivia McPhaul founded BiT
              in 2018.
            </p>
            <p className="section-text">
              They realized that Impostor Syndrome was, and continues to be,
              something that many Black students face in the technology field,
              and wanted to help combat this issue. Since its founding, the
              organization has grown and now has approximately 120 members. BiT
              has held events with top companies for members to learn about
              internships and full-time jobs. BiT has also led technical
              seminars, tutoring sessions, and company networking events for
              members.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Why Partner with AfroPix?</h2>
          <p className="section-text">
            Our mission is to expand and empower communities in technology. We
            want to establish a welcoming environment for aspiring technologists
            and drive the growth of these groups. AfroPix aspires to be an
            incredible learning experience for our participants.
          </p>
          <p className="section-text">
            By sponsoring us, you show your support for growth in the tech
            sphere and have the opportunity to meet top talent from colleges all
            across North Carolina!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
