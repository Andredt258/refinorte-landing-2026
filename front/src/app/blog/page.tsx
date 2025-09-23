import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BlogList from "@/components/Blog/BlogList";
import { Metadata } from "next";
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name}`,
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Lee nuestros artículos más recientes."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <BlogList />
        </div>
      </section>
    </>
  );
};

export default Blog;
