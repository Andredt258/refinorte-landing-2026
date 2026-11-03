"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const VisionSection = () => {

  return (
    <section id="nosotros" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative aspect-[4/3] max-w-[550px] lg:mr-0"
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromLeft({ delay: 0.4 })}
              >
                <Image
                  src="/images/about/about-1.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/about/about-1.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <motion.h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.6 })}
                >
                  Visión
                </motion.h3>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.7 })}
                >
                  Para el 2050 seremos una compañía de las más representativas en Colombia, el enfoque diferencial en la generación de valor, una amplia huella social, y un trabajo arduo en materia de sostenibilidad medioambiental, nos posicionará entre las 1000 mejores empresas del país.
                </motion.p>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.8 })}
                >
                  Nuestro portafolio se extenderá a grandes multinacionales; toda vez que la sofisticación de los productos dará pie para la atracción de los nuevos jugadores del mercado saludable. La transición de los antioxidantes de origen artificial como el TBHQ, hacia los antioxidantes naturales producidos en nuestra compañía serán un factor diferenciador de alto valor.
                </motion.p>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.9 })}
                >
                  REFINORTE como actor relevante e influyente de la agroindustria de la palma en Colombia y Latinoamérica, será ejemplo de crecimiento, desarrollo y modelo de lo que significa la integración vertical estratégica. La implementación en nuestra cultura organizacional de una visión holística del mercado, hará de esta compañía la iniciativa disruptiva de mayor generación de valor en la agroindustria de la palma en Colombia, con un eslogan incrustado en su ADN: <span className="italic">“Llevar la industria hasta el campo.”</span>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;