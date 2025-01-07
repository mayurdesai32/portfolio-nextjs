import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavbarSection from "@/component/NavbarSection";
import HeroSection from "@/component/HeroSection";
import AboutSection from "@/component/AboutSection";
import SkillSection from "@/component/SkillSection";
import FooterSection from "@/component/FooterSection";
import ProjectSection from "@/component/ProjectSection";
import ContactSection from "@/component/ContactSection";
import { ToastContainer } from "@/component/ToastContainer";
import "react-toastify/dist/ReactToastify.css";
import MyBlogSection from "@/component/MyBlogSection";
import HeroImage3d from "@/component/HeroImage3d";
const lexend = Lexend({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayur Desai - Full Stack Developer</title>
        <meta
          name="description"
          content="Mayur Desai's portfolio website showcasing skills, personal projects, and contact details. As a Full Stack Developer, I specialize in web and backend development using Node.js, React, and React Native."
        />
        <meta
          name="keywords"
          content="Mayur Desai, Full Stack Developer, Web Developer, Backend Developer, Node.js, React, React Native, Portfolio"
        />
        <meta name="author" content="Mayur Desai" />

        <link rel="canonical" href="https://mayurdesai.vercel.app" />
      </Head>
      <div className={lexend.className}>
        <NavbarSection />
         {/* <HeroImage3d/> */}
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        {/* <MyBlogSection /> */}
        <ContactSection />
        <FooterSection />
        <ToastContainer />
      </div>
    </>
  );
}
