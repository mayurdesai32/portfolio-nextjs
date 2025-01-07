import React from "react";
import TitleSection from "./TitleSection";
import SkillList from "./SkillList";

const SkillSection = () => {
  return (
    <div id="skills">
      <div className="container">
        <TitleSection
          title={"My Skills"}
          subTitle={
            "Here are some of my skills on which I have been working on for the past 3 years."
          }
        />
        <div className="SkillSection">
          <SkillList
            list={[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "TYPESCRIPT",
              "REACT",
              "NEXTJS",
              // "REACTNATIVE",
              "REDUX",
              // "FLUTTER",
              "THREEJS",
              // "SWIFTUI",
              // "JETPACKCOMPOSE"
              // 'FRAMER-MOTION',
            ]}
            title={"FrontEnd"}
            key={"FrontEnd"}
          />
          <SkillList
            list={[
              "SWIFT",
              "KOTLIN",
              "JAVA",
              "REACTNATIVE",
              "FLUTTER",
              "SWIFTUI",
              "REACT NATIVE SKIA",
              " BLOC",
              " RIVERPOD",
              "JETPACKCOMPOSE",
              // 'FIGMA',
            ]}
            title={"Mobile"}
            key={"Mobile"}
          />

          <SkillList
            list={[
              "PYTHON",
              // 'TENSORFLOW',
              "NODE-JS",
              "EXPRESS-JS",
              "DJANGO",
              "MYSQL",
              "MONGODB",
              "DOCKER",
              "GIT",
              "POSTMAN",
              "J-METER",
              // "AWS",
              "LINUX",
            ]}
            title={"BackEnd"}
            key={"BackEnd"}
          />
          {/* <SkillList
            list={[
              "DOCKER",
              "GIT",
              "POSTMAN",
              "J-METER",
              "AWS",
              "LINUX",
              "VS-CODE-DEBUGGING",
              // 'FIGMA',
            ]}
            title={"Development Tools"}
            key={"Development Tools"}
          /> */}

          {/* <SkillList
            list={[
              // "MACHINE LEARNING",
              // "DEEP LEARNING",
              "SCIKIT LEARN",
              "COMPUTER VISION",
              "NLP",
              "TENSORFLOW",
              "LANGCHAIN",
              "SPARK",
              "HIVE",
              "HADOOP",
              "HBASE",
              "KAFKA",
              "AIRFLOW",
              "POWER BI",
            ]}
            title={"ML/AI"}
          /> */}

          {/* <SkillList
          list={[
            'NUMPY',
            'PANDAS',
            'MATPLOTLIB',
            'SEABORN',
            'TENSORFLOW',
            'PLOTLY',
            'YOLO',
          ]}
          title={'ML/AI'}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
