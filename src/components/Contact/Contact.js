import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact us</h1>
      </header>

      <div id="form">
        <form id="waterform" method="post">
          <div className="formgroup" id="name-form">
            <label htmlFor="name">Your name*</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="formgroup" id="email-form">
            <label htmlFor="email">Your e-mail*</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="formgroup" id="message-form">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <input type="submit" value="Send your message!" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
