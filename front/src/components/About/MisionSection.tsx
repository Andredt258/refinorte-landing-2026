"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const MisionSection = () => {

  return (
    <section id="nosotros" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
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
                  Misión
                </motion.h3>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.7 })}
                >
                  Somos una compañía dedicada a la transformación del aceite crudo de palma en el mayor valor agregado para el consumidor final, buscando llegar a todos los hogares de Colombia con productos de la más alta calidad, inocuos y certificados. Trabajamos con los estándares más altos de sostenibilidad ambiental, empleando energías limpias y renovables en nuestros procesos.
                </motion.p>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.8 })}
                >
                  Un enfoque en la mitigación de contaminantes 3MCPD & Glycidol Ester, por el uso de tecnologías de punta hace de nuestros productos la opción más viable en el mercado de grasas y sustitutos para Latinoamérica.
                </motion.p>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed mb-3"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.9 })}
                >
                  Somos además pioneros en la extracción de Vitamina E y Fitoesteroles provenientes de la palma, convirtiéndonos así en proveedores por excelencia para la industria de alimentos y las grandes farmacéuticas.
                </motion.p>
                <motion.p
                  className="text-base font-medium leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed"
                  initial="offScreen"
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 1 })}
                >
                  Trabajamos con talento humano cualificado, que día a día entregan lo mejor de sí para que nuestros productos lleguen al hogar de los colombianos con el toque mágico de la excelencia.
                </motion.p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto aspect-[4/3] max-w-[550px] lg:mr-0"
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromRight({ delay: 0.6 })}
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

export default MisionSection;