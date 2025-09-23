"use client";

import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import Counter from "@/components/Counter";

const Info = () => {

  return (
    <section id="info" className="relative pt-16 md:pt-20 lg:pt-28 shadow-[inset_0_5px_8px_2px_rgba(0,0,0,0.6)] bg-[url('/bg-info.png')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.h2
                className="mb-4 text-2xl lg:text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[36px]"
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromBottom({ delay: 0.4 })}
              >
                ¿Sabías qué representa <span className="font-bold">REFINORTE</span> para Norte de Santander?
              </motion.h2>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto lg:mr-0">
                <div className="mb-6">
                  <motion.h3
                    className="text-center text-xl lg:text-2xl font-bold mb-3"
                    initial="offScreen"
                    whileInView={"onScreen"}
                    viewport={{once: true}}
                    variants={slideInFromBottom({ delay: 0.6 })}
                  >
                    Mitigación de emisiones de CO2e:
                  </motion.h3>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-xl gap-3">
                      <motion.div
                        className="text-center"
                        initial="offScreen"
                        whileInView={"onScreen"}
                        viewport={{once: true}}
                        variants={slideInFromBottom({ delay: 0.7 })}
                      >
                        <span className="font-bold text-2xl lg:text-4xl font-mono"><Counter value={2703} /></span>
                        <br />
                        <span>Ton De CO2e</span>
                        <br />
                        <span className=" italic font-medium">Año de fuentes móviles</span>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        initial="offScreen"
                        whileInView={"onScreen"}
                        viewport={{once: true}}
                        variants={slideInFromBottom({ delay: 0.8 })}
                      >
                        <span className="font-bold text-2xl lg:text-4xl font-mono"><Counter value={9798} /></span>
                        <br />
                        <span>Ton De CO2e</span>
                        <br />
                        <span className=" italic font-medium">Año de fuentes fijas</span>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        initial="offScreen"
                        whileInView={"onScreen"}
                        viewport={{once: true}}
                        variants={slideInFromBottom({ delay: 0.9 })}
                      >
                        <span className="font-bold text-2xl lg:text-4xl font-mono"><Counter value={12501} /></span>
                        <br />
                        <span>Ton De CO2e</span>
                        <br />
                        <span className=" italic font-medium">Año</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div>
                  <motion.h3
                    className="text-center text-2xl font-bold mb-3"
                    initial="offScreen"
                    whileInView={"onScreen"}
                    viewport={{once: true}}
                    variants={slideInFromBottom({ delay: 0.6 })}
                  >
                    Generación de nuevos empleos (Py):
                  </motion.h3>
                  <div className="flex justify-center gap-6">
                    <motion.div
                      className="text-center"
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromBottom({ delay: 0.7 })}
                    >
                      <span className="font-bold text-2xl lg:text-4xl font-mono"><Counter value={500} /></span>
                      <br />
                      <span>Empleos directos</span>
                    </motion.div>
                    <motion.div
                      className="text-center"
                      initial="offScreen"
                      whileInView={"onScreen"}
                      viewport={{once: true}}
                      variants={slideInFromBottom({ delay: 0.8 })}
                    >
                      <span className="font-bold text-2xl lg:text-4xl font-mono"><Counter value={2000} /></span>
                      <br />
                      <span>Empleos indirectos</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
