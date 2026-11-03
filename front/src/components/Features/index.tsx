"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Creando nuevas oportunidades."
            paragraph="REFINORTE es un proyecto que promueve el desarrollo de nuestra región."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial="offScreen"
                whileInView={"onScreen"}
                viewport={{once: true}}
                variants={slideInFromBottom({ delay: ( 0.2 * index )})}
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
