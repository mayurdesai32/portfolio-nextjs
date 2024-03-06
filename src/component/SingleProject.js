import React, { useState } from "react";
import Image from "next/image";

// import hero from '@/../public/hero.png';
// import CATD from '@/../public/CATD.png';
// import CATD from '../../public';
const SingleProject = ({ data }) => {
  let animate = "project_img_animate";
  console.log(data.category);
  if (
    data.category.find((item) => {
      return item == "Mobile";
    })
  ) {
    animate = null;
  }

  const [readMore, setreadMore] = useState(false);
  return (
    <div className="SingleProject">
      <div className={`project_img ${animate}`}>
        <Image
          src={data.project_img}
          alt="CATD"
          width={550}
          height={327}
          placeholder="empty"
          priority={false}
        />
      </div>

      <div className="project_skill">
        {data.project_skill.map((e, i) => (
          <div className="project_skill_item" key={i}>
            {e}
          </div>
        ))}
      </div>
      <div className="project_title">{data.project_title}</div>
      <div className="project_desc">
        {!readMore ? (
          <>
            {data.project_desc.slice(0, 100)} ...
            <button onClick={() => setreadMore(true)}>readmore</button>
          </>
        ) : (
          <>
            {" "}
            {data.project_desc}{" "}
            <button onClick={() => setreadMore(false)}>readless</button>
          </>
        )}
      </div>
      <div className="project_btn">
        <a href={data.Github_Link} target="blank">
          Github Link
        </a>
        <a href={data.Live_Link} target="blank">
          Live Link
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
