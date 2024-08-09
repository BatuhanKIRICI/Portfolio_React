import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +49 176 564235
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              batuhankirici01@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              +49 176 564235
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            My proficiency in programming languages such as HTML, CSS,
            JavaScript, and TypeScript, as well as CSS and frameworks such as
            React and Next.js, allow me to build dynamic and scalable
            applications. In addition, I have experience in version control with
            GitHub methodologie.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows={5} placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
