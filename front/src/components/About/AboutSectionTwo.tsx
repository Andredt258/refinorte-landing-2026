"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const AboutSectionTwo = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              className="relative mx-auto mb-12 aspect-[4/3] max-w-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
              initial="offScreen"
              whileInView={"onScreen"}
              viewport={{once: true}}
              variants={slideInFromRight({ delay: 0.4 })}
            >
             <Image
                  src="/images/about/about-2.webp"
                  alt="about-image"
                  width={500}
                  height={400}
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/about/about-2.webp"
                  alt="about-image"
                  width={500}
                  height={400}
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <motion.h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.6 })}
                >
                  Impacto Social Positivo
                </motion.h3>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.7 })}
                >
                  Refinorte se dedica a mejorar la calidad de vida de las comunidades locales a través de programas de responsabilidad social que apoyan la educación, la salud y el desarrollo económico.
                </motion.p>
              </div>
              <div className="mb-9">
                <motion.h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.8 })}
                >
                  Excelencia Operacional
                </motion.h3>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.9 })}
                >
                  La compañía se enfoca en la excelencia operacional, implementando mejores prácticas y estándares internacionales para asegurar la calidad y la eficiencia en todos sus procesos.
                </motion.p>
              </div>
              <div className="mb-1">
                <motion.h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 1 })}
                >
                  Innovación Continua
                </motion.h3>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 1.1 })}
                >
                  Refinorte está comprometido con la innovación continua, invirtiendo en investigación y desarrollo para mejorar sus productos y servicios, y mantenerse a la vanguardia del sector industrial.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden w-1/2 h-full lg:flex 2xl:right-0 inset-y-0 z-[-1] opacity-30 lg:opacity-100">
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 905.95 698.45">
          <defs>
            <clipPath id="clippath">
              <rect strokeWidth={0} fill="none" x="-1019.23" y="11.94" width="1925.18" height="686.51"/>
            </clipPath>
          </defs>
          <g className="cls-1">
            <polygon className="isolate" strokeWidth={0} opacity={0.3} fill="#f8d420" points="-230 909.01 941.48 -10 1088.8 406.69 -249.33 1476.71 -249.33 909.01"/>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
