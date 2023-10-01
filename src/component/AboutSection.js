import React from 'react';
import TitleSection from './TitleSection';

const AboutSection = () => {
  return (
    <div id='about' className='container'>
      <TitleSection title={'About Me'} />
      <div className='about'>
        <div className='about_title'>Hello! My name is Mayur Desai</div>
        <p>
          I am a full-stack developer. I did my M.Tech. in artificial
          intelligence (AI) from K.J. Somaiya Institute of Technology. I focus
          on the web. development as well as topics like deep learning, neural
          networks, and machine learning.
        </p>
        <p>
          I&apos;m always willing to pick up new skills. I am also competent of
          teamwork, analytical thinking, leadership qualities, attention to
          detail, and other skills. I offer every project my absolute best
          effort.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
