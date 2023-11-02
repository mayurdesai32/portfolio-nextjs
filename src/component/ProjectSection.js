'use client';
import React, { useState } from 'react';
import TitleSection from './TitleSection';
import SingleProject from './SingleProject';

const ProjectSection = () => {
  const [category, setCategory] = useState('All');
  const handler = (val) => {
    setCategory(val);
  };

  const project_item = ['All', 'Web', 'Mobile', 'ML/AI'];

  const project_list = [
    {
      project_title: 'MY PORTFOLIO',
      project_skill: ['Next', 'HTML', 'CSS', 'nodemailer', 'Google-email-api'],
      category: ['All', 'Web'],
      project_img: '/portfolio.png',
      Github_Link: 'https://github.com/mayurdesai32/portfolio-nextjs',
      Live_Link: 'https://mayurdesai.vercel.app/',
      project_desc:
        'I built my portfolio using Next.js to showcase skills, personal projects, and contact details. The website is deployed on Vercel and includes a Nodemailer feature for easy communication.',
    },
    {
      project_title: 'MDSHOP',
      project_skill: ['React Native', 'Stripe', 'Node', 'express', 'MongoDB'],
      category: ['All', 'Mobile'],
      project_img: '/mdshop.png',
      Github_Link: 'https://github.com/mayurdesai32/MDShop-reactNative',
      Live_Link: 'https://github.com/mayurdesai32/MDShop-reactNative',
      project_desc:
        'MDSHOP is a feature-rich e-commerce mobile app using React Native for the frontend and Node.js with Express and MongoDB for the backend. Users enjoy seamless product browsing, cart management, and secure checkout via COD or Stripe. It includes user-friendly functionalities such as profile creation, login with profile picture addition, and a robust OTP-based password reset. Admins efficiently manage products and orders',
    },
    // {
    //   project_title: 'MDSTORE',
    //   project_skill: [
    //     'Next',
    //     'react',
    //     'react',
    //     'react',
    //     'react',
    //     'react',
    //     'react',
    //     'react',
    //   ],
    //   category: ['All', 'Web'],
    //   project_img: '/CATD.png',
    //   Github_Link: '#about',
    //   Live_Link: '#about',
    //   project_desc:
    //     'Trackify is a web application web application web application designed to task management and enhance Trackify is a web application web application web application designed to task management and enhance Trackify is a web application web application web application designed to task management and enhance ',
    // },
    {
      project_title: 'MDTVSHOW',
      project_skill: ['React', 'CSS', 'tvmaza api', 'ContextAPI'],
      category: ['All', 'Web'],
      project_img: '/mdtv.png',
      Github_Link: 'https://github.com/mayurdesai32/Mdtv-search',
      Live_Link: 'https://mdtv.netlify.app/',
      project_desc:
        'MDTV Search Engine is the responsive website, single page application which give information about tv shows like Rating ,official site, summary. Technologies:-Html, CSS, React.js, React Hook, Axios , React Router, TVmaze API',
    },
    {
      project_title: 'URL-SHORTNER',
      project_skill: [
        'React',
        'CSS',
        'bootstrap',
        'Node',
        'express',
        'MongoDB',
      ],
      category: ['All', 'Web'],
      project_img: '/url.png',
      Github_Link: 'https://github.com/mayurdesai32/Url-shortner-',
      Live_Link: 'https://urlshortner-bbo7.onrender.com/',
      project_desc:
        'The URL Shortener project is a web application that allows users to shorten long URLs into shorter, more manageable links. It consists of both frontend and backend components. Users can input a long URL, and the system generates a unique, shorter alias for it. When someone clicks on the shortened URL, they are redirected to the original long URL.',
    },
  ];

  return (
    <div id='project' className='container'>
      <div className='ProjectSection'>
        <TitleSection
          title={'My Project'}
          subTitle={
            'Here, you can find some of the sample projects that I created recently.'
          }
        />
        <div className='project_category'>
          {project_item.map((e, i) => (
            <button
              key={i}
              className={
                category === e ? 'project_item selected' : 'project_item'
              }
              onClick={() => handler(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <div className='projectList'>
          {project_list.map((e, i) =>
            e.category.includes(category) || category === 'All' ? (
              <SingleProject key={i} data={e} />
            ) : (
              <></>
            )
          )}

          {/* <SingleProject /> */}
        </div>
        {/* <div className='load_more'>Load More</div> */}
        {/* <div className='pagination'>
          <div className='pagination_item'>First</div>
          <div className='pagination_item'>Prev</div>
          <div className='pagination_item'>1</div>
          <div className='pagination_item'>2</div>
          <div className='pagination_item'>3</div>
          <div className='pagination_item'>Next</div>
          <div className='pagination_item'>Last</div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectSection;
