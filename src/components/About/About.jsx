import "./about.css";
import Artsy from "../../img/artsy.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Artsy} alt="" className="a-img" />
     
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis natus ut quis nemo 
         tenetur culpa omnis unde? Nostrum eveniet quis et maiores sunt eius laboriosam error quasi ea nisi.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
  
      </div>
    </div>
  );
};

export default About;