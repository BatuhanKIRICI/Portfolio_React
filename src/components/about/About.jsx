import "./about.css";
import Img1 from "../../img/pexels-goumbik-574071.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Img1} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub"></p>
        <p className="a-desc">
          My proficiency in programming languages such as HTML, CSS, JavaScript,
          and TypeScript, as well as CSS and frameworks such as React and
          Next.js, allow me to build dynamic and scalable applications. In
          addition, I have experience in version control with GitHub
          methodologie.
        </p>
      </div>
    </div>
  );
};

export default About;
