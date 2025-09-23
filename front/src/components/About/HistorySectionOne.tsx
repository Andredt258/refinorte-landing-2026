"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const HistorySectionOne = () => {

  return (
    <section id="nosotros" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-9">
                <motion.h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.6 })}
                >
                  Nuestra historia
                </motion.h3>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.7 })}
                >
                  REFINORTE nace de un visión estratégica empresarial, en el año 2021 nuestro CEO, un hombre de origen campesino pero con una visión avanzada de lo que significa industrializar el campo, visitaba la región del Catatumbo, el escuchar las palmicultores, pequeños, medianos y grandes, interactuar con los operarios, gerentes y dueños de las plantas de beneficio primario de la región nortesantandereana, el entender el contexto de una actividad que genera más de 10 mil empleos para el departamento, el comprender que la verdadera riqueza y desarrollo para el campo está en generar un valor agregado a los productos que allí se producen, pero además hacer partícipes a nuestros empresarios del campo en cada uno de los eslabones de la cadena de valor de un commodity.
                </motion.p>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.8 })}
                >
                  Del esquema a mano alzada en una servilleta en un restaurante del municipio de El Zulia – Norte de Santander, nació un gran proyecto que luego un grupo de profesionales en todas las disciplinas lo convierten en realidad.
                </motion.p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto aspect-[4/3] max-w-[550px] lg:mr-0"
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromRight({ delay: 0.9 })}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySectionOne;
