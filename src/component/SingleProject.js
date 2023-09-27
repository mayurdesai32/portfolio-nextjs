import React, { useState } from 'react';
import Image from 'next/image';

// import hero from '@/../public/hero.png';
// import CATD from '@/../public/CATD.png';
// import CATD from '../../public';
const SingleProject = ({
  project_title = 'MDSTORE',

  project_skill = [
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
    'react',
  ],
  // public\CATD.png
  project_img = '/CATD.png',
  Github_Link = '#about',
  Live_Link = '#about',
  project_desc = 'Trackify is a web application web application web application designed to task management and enhance Trackify is a web application web application web application designed to task management and enhance Trackify is a web application web application web application designed to task management and enhance ',
}) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <div className='SingleProject'>
      <div className='project_img'>
        <Image src={project_img} alt='CATD' width={558} height={327} />
      </div>

      <div className='project_skill'>
        {project_skill.map((e, i) => (
          <div className='project_skill_item' key={i}>
            {e}
          </div>
        ))}
      </div>
      <div className='project_title'>{project_title}</div>
      <div className='project_desc'>
        {!readMore ? (
          <>
            {project_desc.slice(0, 100)} ...
            <button onClick={() => setreadMore(true)}>readmore</button>
          </>
        ) : (
          <> {project_desc} </>
        )}
      </div>
      <div className='project_btn'>
        <a href={Github_Link}>Github Link</a>
        <a href={Live_Link}>Live Link</a>
      </div>
    </div>
  );
};

export default SingleProject;
