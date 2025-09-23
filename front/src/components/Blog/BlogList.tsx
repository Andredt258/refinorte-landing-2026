"use client";

import React, { useState, useEffect } from 'react'
import SingleBlog from "@/components/Blog/SingleBlog";
import { fetchPostsPage } from "@/utils/fetch";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import { slideInFromBottom } from '@/utils/motion';
import Pagination from './Pagination'

const BlogList = () => {

  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPostsByPage = async (page: number) => {
      try {
        setLoading(true);
        const data = await fetchPostsPage(page);
        setPosts(data.results.posts);
        setTotalPages(Math.ceil(data.count / 6));
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };
  
    fetchPostsByPage(currentPage);
  }, [currentPage]);
  
  return (
    <>
      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{ once: true }}
                variants={slideInFromBottom({ delay: 0.2 * index })}
              >
                <SingleBlog blog={post} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-6" data-wow-delay=".15s">
            <div className="px-4">
              <Pagination list_page={setCurrentPage} count={totalPages}  type={"small"} />
            </div>
          </div>
        </>
      ):(
        <>
          No hay publicaciones disponibles.
        </>  
      )}
    </>
  )
}

export default BlogList