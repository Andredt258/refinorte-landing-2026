"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Impulsemos nuestra región"
          paragraph="Hagamos realidad el crecimiento de Norte de Santader."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video-2.png" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="custom"
        url="/videos/video-2.webm"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <motion.div
        className="absolute top-0 h-full right-0 z-[-1]"
        initial="offScreen"
        whileInView={"onScreen"}
        viewport={{once: true}}
        variants={slideInFromLeft({ delay: 0.4 })}
      >
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830.42 858.93" className="w-full h-full">
          <defs>
            <clipPath id="clippath">
              <rect className="cls-2" x="-1100.58" y="3.03" width="1931" height="855.9"/>
            </clipPath>
            <linearGradient id="degradado_1" data-name="Degradado sin nombre" x1="-2800" y1="1855.24" x2="-2781.15" y2="1855.24" gradientTransform="translate(-2196.37 -1469.35) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="transparent"/>
              <stop offset="1" stopColor="#1e1e1ecc"/>
            </linearGradient>
          </defs>
          <g>
            <g id="Capa_1-2" data-name="Capa 1">
              <g>
                <polygon fill="#f9d401" strokeWidth="0" points="584.78 364.47 916.3 624.35 916.3 283.99 584.78 24.11 584.78 364.47"/>
                <polygon fill="#f8d420" opacity="0.3" strokeWidth="0" points="584.78 24.11 46.2 -358.41 -42.13 -106.86 584.78 364.47 584.78 24.11"/>
                <polygon fill="#58ab32" opacity="0.25" strokeWidth="0" points="382.96 1005.25 584.78 741.6 584.78 406.09 48.41 1005.08 382.96 1005.25"/>
                <polygon fill="#58ab32" strokeWidth="0" points="584.78 1005.08 916.3 623.81 916.3 283.45 264.45 1005.25 584.78 1005.08"/>
                <rect fill="url(#degradado_1" strokeWidth="0" x="584.78" y="-233.46" width="39.93" height="1238.71"/>
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
    </section>
  );
};

export default Video;
