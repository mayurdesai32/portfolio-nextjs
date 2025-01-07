// 'use client';
import React from "react";
import Image from "next/image";

// import hero from '@/../public/hero.png';
import hero from "../../public/hero.png";
import HeroImage3d from "./HeroImage3d";
// import Group from '../../public/Group 1.svg';
const HeroSection = () => {
  return (
    <div id="HeroSection">
      <div className="container">
        <div className="hero_flex ">
          <div className="hero_content">
            <div className="title">Hi, I am Mayur Desai</div>

            <div className="profile">Full Stack Developer</div>

            {/* <div className='profile'>Android Developer</div> */}
            <div className="desc">
              I am a fullstack developer who loves to code and is always
              passionate to learn new technologies
            </div>
            <div className="hero_btn">
              <a href="#contact">Contact Me</a>
              <a
                href=" https://drive.google.com/file/d/1ZlglBf-cWYZ3Tbv8ZlHTUTw9kTVNuS16/view?usp=sharing"
                // download="Mayur_Desai_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="heroImg" style={{ position: "relative" }}>
            <div className="heroImg_bg" />
            {/* <Image src={hero} alt="hero" priority={false} placeholder="empty" /> */}
            <HeroImage3d />
          </div>
        </div>
        {/*  */}

        <div className="hero_footer">
          <a href="https://linkedin.com/in/mayurdesai88" target="blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/mayurdesai32" target="blank">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://medium.com/@msdesai32" target="blank">
            <i
              className="fa-brands fa-medium"
              style={{ padding: "0.6rem 0.5rem" }}
            ></i>
          </a>

          <a href="https://wa.me/9372191971" target="blank">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="mailto:msdesai32@gmail.com" target="blank">
            <i className="fa-sharp fa-regular fa-envelope circular-icon"></i>
          </a>
          {/* <i className="fa-brands fa-kaggle"></i> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
