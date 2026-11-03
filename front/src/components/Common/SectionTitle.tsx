"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <motion.h2
          className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
          initial="offScreen"
          whileInView={"onScreen"}
          viewport={{once: true}}
          variants={slideInFromBottom({ delay: 0.4 })}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-base !leading-relaxed text-gray-300 md:text-lg"
          initial="offScreen"
          whileInView={"onScreen"}
          viewport={{once: true}}
          variants={slideInFromBottom({ delay: 0.6 })}
        >
          {paragraph}
        </motion.p>
      </div>
    </>
  );
};

export default SectionTitle;
