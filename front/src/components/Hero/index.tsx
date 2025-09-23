"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, zoomIn } from "@/utils/motion";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[160px] 2xl:pb-[180px] 2xl:pt-[180px] bg-[url('/bg-hero.png')] bg-cover bg-center bg-no-repeat dark:bg-[url('/hero-bg-dark.jpg)'] dark:bg-cover dark:bg-center dark:bg-no-repeat"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex flex-col lg:flex-row lg:items-center">
              <motion.div
                className="w-full lg:w-1/2"
                initial={"offScreen"}
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={zoomIn({ delay: 0.4 })}
              >
                <Image
                  src="/hombre.png"
                  className="refinorte-man mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:ml-0"
                  alt="Hombre Refinorte"
                  width={550}
                  height={550}
                />
              </motion.div>
              <div className="w-full lg:w-1/2 text-center">
                <motion.h1
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  initial={"offScreen"}
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.6 })}
                >
                  La nueva era agroindustrial en Norte de Santander
                </motion.h1>
                <motion.p
                  className="mb-12 text-base !leading-relaxed text-body-color dark:text-gray-300 sm:text-lg md:text-xl"
                  initial={"offScreen"}
                  whileInView={"onScreen"}
                  viewport={{once: true}}
                  variants={slideInFromRight({ delay: 0.8 })}
                >
                  Complejo Agroindustrial Integrado De
                  Refinación De Aceites Comestibles, Margarinas,
                  Shortenings, Productos Nutracéuticos
                  Intermedios Y Jabonería.
                </motion.p>
                <div className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <motion.div
                    initial={"offScreen"}
                    whileInView={"onScreen"}
                    viewport={{once: true}}
                    variants={slideInFromRight({ delay: 1 })}
                  >
                    <Link
                      href="/#nosotros"
                      className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      Más información
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={"offScreen"}
                    whileInView={"onScreen"}
                    viewport={{once: true}}
                    variants={slideInFromRight({ delay: 1.2 })}
                  >
                    <Link
                      href="/contacto"
                      className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    >
                      Contáctanos
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute hidden lg:flex h-full lg:-left-36 2xl:left-0 inset-y-0 z-[-1] opacity-30 lg:opacity-100"
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once: true}}
          variants={slideInFromLeft({ delay: 0.2 })}
        >
          <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958.43 1238.7" className="w-full h-full">
            <defs>
              <linearGradient id="Degradado_sin_nombre" x1="-1990" y1="1975.95" x2="-1965.16" y2="1975.95" gradientTransform="translate(-1338.26 2595.3) rotate(-180)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="transparent"/>
                <stop offset="1" stopColor="#1e1e1ecc"/>
              </linearGradient>
            </defs>
            <g>
              <g id="Capa_1-2" data-name="Capa 1">
                <g>
                  <polygon fill="#f9d401" strokeWidth="0" points="626.91 597.92 958.43 857.81 958.43 517.45 626.91 257.57 626.91 597.92"/>
                  <polygon fill="#f8d420" opacity="0.3" strokeWidth="0" points="626.91 257.57 88.32 -124.95 -85.85 40.74 626.91 597.92 626.91 257.57"/>
                  <polygon fill="#58ab32" opacity="0.25" strokeWidth="0" points="425.08 1238.7 626.91 975.05 626.91 639.54 90.53 1238.53 425.08 1238.7"/>
                  <polygon fill="#58ab32" strokeWidth="0" points="626.91 1238.53 958.43 857.27 958.43 516.9 306.58 1238.7 626.91 1238.53"/>
                  <rect fill="url(#Degradado_sin_nombre)" strokeWidth="0" x="626.9" width="39.93" height="1238.71"/>
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
        {/* <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#58ab32" stopOpacity="0" />
                <stop offset="1" stopColor="#58ab32" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#58ab32" stopOpacity="0" />
                <stop offset="1" stopColor="#58ab32" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#58ab32" stopOpacity="0" />
                <stop offset="1" stopColor="#58ab32" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#58ab32" stopOpacity="0" />
                <stop offset="1" stopColor="#58ab32" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#58ab32" />
                <stop offset="1" stopColor="#58ab32" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
