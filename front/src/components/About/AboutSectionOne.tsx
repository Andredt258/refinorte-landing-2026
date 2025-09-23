"use client"

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-gray-300">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-yellow bg-opacity-10 text-yellow">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="nosotros" className="relative pt-16 md:pt-20 lg:pt-28 overflow-hidden">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Construimos el futuro juntos"
                paragraph="El complejo estará ubicado en el municipio El Zulia, Norte de Santander, generando una importante sinergia de logística por uso de la infraestructura actual como vías y la amplia disponibilidad de servicios públicos."
                mb="44px"
              />
              <div
                className="mb-12 lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <motion.div
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromRight({ delay: 0.8 })}
                    >
                      <List text="Ubicación estratégica" />
                    </motion.div>
                    <motion.div
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromRight({ delay: 0.9 })}
                    >
                      <List text="Sinergia logística" />
                    </motion.div>
                    <motion.div
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromRight({ delay: 1 })}
                    >
                      <List text="Disponibilidad de servicios" />
                    </motion.div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <motion.div
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromRight({ delay: 1.1 })}
                    >
                      <List text="Generación de empleo local" />
                    </motion.div>
                    <motion.div
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromRight({ delay: 1.2 })}
                    >
                      <List text="Compromiso con la sostenibilidad" />
                    </motion.div>
                    <motion.div
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromRight({ delay: 1.3 })}
                    >
                      <List text="Innovación y tecnología de punta" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto aspect-[4/3] max-w-[550px] lg:mr-0"
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromRight({ delay: 0.4 })}
              >
                <Image
                  src="/images/about/about-1.webp"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg object-cover"
                />
                <Image
                  src="/images/about/about-1.webp"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden w-1/2 h-screen lg:flex left-0 inset-y-0 z-[-1] opacity-30 lg:opacity-100">
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 954.67 1023.33">
          <polygon fill="#58ab32" opacity={0.25} strokeWidth={0} points="336.64 -.06 0 439.71 0 999.32 894.66 .22 336.64 -.06"/>
        </svg>
      </div>
    </section>
  );
};

export default AboutSectionOne;
