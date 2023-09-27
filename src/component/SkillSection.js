import React from 'react';
import TitleSection from './TitleSection';
import SkillList from './SkillList';

const SkillSection = () => {
  return (
    <div id='skills' className='container'>
      <TitleSection
        title={'My Skills'}
        subTitle={
          'Here are some of my skills on which I have been working on for the past 2 years.'
        }
      />
      <div className='SkillSection'>
        <SkillList
          list={[
            'HTML',
            'CSS',
            'JAVASCRIPT',
            'TYPESCRIPT',
            'REACT',
            'NEXTJS',
            'REACTNATIVE',
            'REDUX',
            // 'FRAMER-MOTION',
          ]}
          title={'FrontEnd'}
          key={'FrontEnd'}
        />

        <SkillList
          list={[
            'PYTHON',
            // 'TENSORFLOW',
            'NODE-JS',
            'EXPRESS-JS',

            'FASTAPI',
            'MYSQL',
            'MONGODB',
          ]}
          title={'BackEnd'}
          key={'BackEnd'}
        />
        <SkillList
          list={[
            'DOCKER',
            'GIT',
            'POSTMAN',
            'J-METER',
            'AWS',
            'LINUX',
            'VS-CODE-DEBUGGING',
            // 'FIGMA',
          ]}
          title={'Development Tools'}
          key={'Development Tools'}
        />

        {/* <SkillList
          list={[
            'NUMPY',
            'PANDAS',
            'MATPLOTLIB',
            'SEABORN',
            'TENSORFLOW',
            'PLOTLY',
            'YOLO',
            // 'REDUX',
            // 'FRAMER-MOTION',
          ]}
          title={'ML/AI'}
        /> */}
      </div>
    </div>
  );
};

export default SkillSection;
