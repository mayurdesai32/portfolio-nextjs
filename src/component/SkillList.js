import React from 'react';

const SkillList = ({ list, title }) => {
  return (
    <div className='SkillList'>
      <div className='skill_title'>{title}</div>
      <div className='skill_item_list'>
        {list.map((e, i) => (
          <div className='skill_item' key={i}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
