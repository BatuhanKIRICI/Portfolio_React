import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Batuhan KIRICI</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <div className="i-description">
            As a Frontend Developer, I bring a unique blend of technical
            expertise and creativity to the table. With experience in front-end
            development, I am skilled in creating web applications and ensuring
            optimal user experiences.{" "}
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
