import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Info from "@/components/Info";
// import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { siteConfig } from '@/config/site';
import PageViews from "@/components/PageViews/PageViews";

export const metadata: Metadata = {
  title: `Inicio - ${siteConfig.name}`,
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Company />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Info />
      {/* <Testimonials /> */}
      <Blog />
      {/* <Contact /> */}
      <PageViews />
    </>
  );
}
