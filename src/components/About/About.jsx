import "./about.css";
import aboutMe from "../../img/aboutMe.jpg";
import Javascript from '../../img/java-script.png';
import React from '../../img/react.png';
import Node from '../../img/node.png';
import HTML from '../../img/html.png';
import CSS from '../../img/css3.png';
import MongoDB from '../../img/mongodb.png';
import Github from '../../img/github.png';
import SQL from '../../img/sql.png';
import Bootstrap from '../../img/bootstrap.png';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={aboutMe} alt="" className="a-award-img" />

                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eaque dicta, omnis velit sit
                    non saepe rerum consequuntur natus, est, maxime tempora aliquam molestias

                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.

                    <div><br></br><br></br><br></br>
                        <img className='javascript'
                            src={HTML} alt="" />
                        <img className='javascript'
                            src={CSS} alt="" />
                        <img className='javascript'
                            src={Bootstrap} alt="" />
                        <img className='javascript'
                            src={Javascript} alt="" />
                        <img className='javascript'
                            src={React} alt="" />
                        <img className='javascript'
                            src={Node} alt="" />
                        <img className='javascript'
                            src={MongoDB} alt="" />
                        <img className='javascript'
                            src={Github} alt="" />
                        <img className='javascript'
                            src={SQL} alt="" />

                    </div>
                </p>

            </div>
        </div>
    );
};

export default About;