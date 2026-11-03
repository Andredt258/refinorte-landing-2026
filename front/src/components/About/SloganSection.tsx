"use client";

import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const SloganSection = () => {

  return (
    <section id="info" className="relative pt-16 md:pt-20 lg:pt-28 shadow-[inset_0_5px_8px_2px_rgba(0,0,0,0.6)] bg-[url('/bg-info.png')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full">
              <motion.h2
                className="mb-6 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[36px] text-center"
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromBottom({ delay: 0.4 })}
              >
                En <span className="">REFINORTE</span>
              </motion.h2>
            </div>
            <div className="w-full px-4">
              <div className="relative mx-auto lg:mr-0">
                <div className="mb-6">
                  <motion.p
                    className="text-center text-3xl font-bold mb-3"
                    initial="offScreen"
                    whileInView={"onScreen"}
                    viewport={{once: true}}
                    variants={slideInFromBottom({ delay: 0.6 })}
                  >
                    Cosechamos la excelencia y refinamos el futuro.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
