import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Lexend } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import NavbarSection from '@/component/NavbarSection';
import HeroSection from '@/component/HeroSection';
import AboutSection from '@/component/AboutSection';
import SkillSection from '@/component/SkillSection';
import FooterSection from '@/component/FooterSection';
import ProjectSection from '@/component/ProjectSection';
import ContactSection from '@/component/ContactSection';

const lexend = Lexend({ subsets: ['latin'], display: 'swap' });

export default function Home() {
  return (
    <div className={lexend.className}>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
