import "./intro.css";



const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tonya Dearman</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-End Developer</div>
              <div className="i-title-item">Back-End Developer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
              
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil iusto ipsum sed vero corrupti 

          </p>

        </div>
      
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        
      </div>

    </div>


  );
};



export default Intro;