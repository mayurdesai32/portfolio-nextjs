import React from "react";

const FooterSection = () => {
  return (
    <div className="FooterSection container">
      <div className="footer_left">
        <a href="#HeroSection">Mayur Desai.</a>
      </div>
      <div className="footer_center">
        Mayur Desai@2023 | All Rights Reserved
      </div>
      <div className="footer_end">
        <a href="https://linkedin.com/in/mayurdesai88" target="blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:msdesai32@gmail.com">
          <i className="fa-sharp fa-regular fa-envelope circular-icon"></i>
        </a>

        <a href="https://medium.com/@msdesai32" target="blank">
          <i
            class="fa-brands fa-medium"
            style={{ padding: "0.5rem 0.4rem" }}
          ></i>
        </a>

        <a href="https://wa.me/9372191971" target="blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <a href="https://github.com/mayurdesai32" target="blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
