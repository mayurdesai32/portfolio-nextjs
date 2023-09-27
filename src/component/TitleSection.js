import React from 'react';

const TitleSection = ({ title, subTitle = '' }) => {
  return (
    <div className='TitleSection container'>
      <div className='Title'>{title}</div>
      <div className='underline'></div>
      {subTitle === '' ? (
        <div className='noSubTitle'> </div>
      ) : (
        <div className='subTitle'>{subTitle}</div>
      )}
    </div>
  );
};

export default TitleSection;
