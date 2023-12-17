import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <h1 className="title">About Ambula</h1>
      <p className="lead">
        At Ambula, we believe healthcare should be accessible, affordable, and
        convenient for everyone. That's why we created our platform to empower
        you to manage your health information and connect with healthcare
        providers seamlessly.
      </p>

      <div className="features">
        <div className="feature">
          <h3>Your Health, One ID</h3>
          <p>
            Create a unique Ambula ID that securely stores all your health
            records in one place. No more carrying bulky files or worrying about
            losing essential documents.
          </p>
        </div>
        <div className="feature">
          <h3>Always at Your Fingertips</h3>
          <p>
            Access your health records anytime, anywhere from your smartphone.
            View lab results, prescriptions, and past consultations with ease.
          </p>
        </div>
        <div className="feature">
          <h3>Connect Instantly</h3>
          <p>
            Book appointments with doctors, labs, and pharmacies directly
            through the app. Skip long waiting lines and schedule your
            healthcare needs at your convenience.
          </p>
        </div>
      </div>

      <hr />

      <h2>What our users say</h2>

      <div className="testimonials">
        <div className="testimonial">
        <p className="quote">
      "Managing my health is seamless with Ambula. Having all my records in one place and being able to book appointments directly through the app has been a game-changer." 
      <span className="author">- Aisha, Mumbai</span>
    </p>
        </div>
        <div className="testimonial">
        <p className="quote">
      "As a doctor, Ambula has revolutionized patient communication for me. Accessing medical histories and securely sharing information has never been easier." 
      <span className="author">- Dr. Kumar, Bangalore</span>
    </p>
        </div>
      </div>

      <hr />

      <h2>Join the Ambula community and experience the future of healthcare!</h2>

      <a
        href="https://ambula.app/"
        target="_blank"
        className="btn btn-primary btn-lg"
      >
        Download the app
      </a>
    </div>
  );
};

export default About;
