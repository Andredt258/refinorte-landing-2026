"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const HistorySectionTwo = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
              initial="offScreen"
              whileInView={"onScreen"}
              viewport={{once: true}}
              variants={slideInFromRight({ delay: 0.4 })}
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.7 })}
                >
                  REFINORTE, la mayor apuesta para la agroindustria de la palma en Colombia, le apuesta al campo, creemos en que en una tierra llena de oportunidades no existe el espacio para dudar, que los estigmas no serán la barrera que nos detendrán para mostrarle a una región, a Colombia y al mundo que la gente buena puede convertir las adversidades en éxito. 
                </motion.p>
              </div>
              <div className="mb-9">
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.9 })}
                >
                  El Complejo Industrial Integrado más moderno de Latinoamérica, se consolida con la participación de muchos que creyeron que si era posible.
                </motion.p>
              </div>
              <div className="mb-1">
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 1.1 })}
                >
                  Aceites de alta pureza, Margarinas, Shortenings, Jabonería, Vitamina E y Fitoesteroles, se comercializarán hacia Colombia y el mundo con la marca de una región pujante y el sello de personas honestas, resilientes y visionarias.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySectionTwo;
