"use client";

import React, { useState, useEffect } from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { fetchPosts } from "@/utils/fetch";
import { Blog as BlogType } from "@/types/blog";
import { motion } from "framer-motion";
import { slideInFromBottom } from '@/utils/motion';

const Blog = () => {

  const [posts, setPosts] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.results.posts);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
    fetchBlogPosts();
  }, []);

  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Publicaciones recientes"
          paragraph="Lee las publicaciones más recientes de nuestro blog."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          { posts.length > 0 ? (
            <>
              { posts && posts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{ once: true }}
                  variants={slideInFromBottom({ delay: 0.2 * index })}
                >
                  <SingleBlog blog={post} />
                </motion.div>
              ))}
            </>
          ) : (
            <p>No hay publicaciones disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
