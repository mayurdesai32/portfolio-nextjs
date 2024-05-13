"use client";
import React, { useState } from "react";
import TitleSection from "./TitleSection";
import SingleProject from "./SingleProject";
import project_list from "./data.json";
// data;
const ProjectSection = () => {
  const [category, setCategory] = useState("All");
  const handler = (val) => {
    setCategory(val);
  };

  const project_item = ["All", "Web", "Mobile", "ML/AI"];

  return (
    <div id="project" className="container">
      <div className="ProjectSection">
        <TitleSection
          title={"My Project"}
          subTitle={
            "Here, you can find some of the sample projects that I created recently."
          }
        />
        <div className="project_category">
          {project_item.map((e, i) => (
            <button
              key={i}
              className={
                category === e ? "project_item selected" : "project_item"
              }
              onClick={() => handler(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="projectList">
          {project_list.map((e, i) =>
            e.category.includes(category) || category === "All" ? (
              <SingleProject key={i} data={e} />
            ) : (
              <></>
            )
          )}

          {/* <SingleProject /> */}
        </div>
        {/* <div className="load_more">Load More</div> */}
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
