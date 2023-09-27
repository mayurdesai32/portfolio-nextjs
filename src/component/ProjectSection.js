'use client';
import React from 'react';
import TitleSection from './TitleSection';
import SingleProject from './SingleProject';

const ProjectSection = () => {
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
          <button className='project_item'>All</button>
          <button className='project_item'>Web</button>
          <button className='project_item'>Mobile</button>
          <button className='project_item'>ML/AI</button>
        </div>
        <div className='projectList'>
          <SingleProject />
          <SingleProject /> <SingleProject />
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
