"use client";

import React, { useState, useEffect } from 'react';
import ModalCompany from './ModalCompany'
import Image from 'next/image'

const companyIcons = [
  {
    src: '/company/empresa.webp',
    alt: 'logo refinorte',
    title: 'Nuestra organización',
    content: <>
      <h3 className='text-2xl font-bold mt-8 mb-2'>Historia</h3>
      <p className='mb-2 text-lg'>REFINORTE nace de un visión estratégica empresarial, en el año 2021 nuestro CEO, un hombre de origen campesino pero con una visión avanzada de lo que significa industrializar el campo, visitaba la región del Catatumbo, el escuchar las palmicultores, pequeños, medianos y grandes, interactuar con los operarios, gerentes y dueños de las plantas de beneficio primario de la región nortesantandereana, el entender el contexto de una actividad que genera más de 10 mil empleos para el departamento, el comprender que la verdadera riqueza y desarrollo para el campo está en generar un valor agregado a los productos que allí se producen, pero además hacer partícipes a nuestros empresarios del campo en cada uno de los eslabones de la cadena de valor de un commodity.</p>
      <p className='mb-2 text-lg'>Del esquema a mano alzada en una servilleta en un restaurante del municipio de El Zulia – Norte de Santander, nació un gran proyecto que luego un grupo de profesionales en todas las disciplinas lo convierten en realida</p>
      <p className='mb-2 text-lg'>REFINORTE, la mayor apuesta para la agroindustria de la palma en Colombia, le apuesta al campo, creemos en que en una tierra llena de oportunidades no existe el espacio para dudar, que los estigmas no serán la barrera que nos detendrán para mostrarle a una región, a Colombia y al mundo que la gente buena puede convertir las adversidades en éxito.</p>
      <p className='mb-2 text-lg'>El Complejo Industrial Integrado más moderno de Latinoamérica, se consolida con la participación de muchos que creyeron que si era posible.</p>
      <p className='mb-2 text-lg'>Aceites de alta pureza, Margarinas, Shortenings, Jabonería, Vitamina E y Fitoesteroles, se comercializarán hacia Colombia y el mundo con la marca de una región pujante y el sello de personas honestas, resilientes y visionarias.</p>
      <h4 className='text-xl font-bold mt-8 mb-2'>Misión</h4>
      <p className='mb-2 text-lg'>Somos una compañía dedicada a la transformación del aceite crudo de palma en el mayor valor agregado para el consumidor final, buscando llegar a todos los hogares de Colombia con productos de la más alta calidad, inocuos y certificados. Trabajamos con los estándares más altos de sostenibilidad ambiental, empleando energías limpias y renovables en nuestros procesos.</p>
      <p className='mb-2 text-lg'>Un enfoque en la mitigación de contaminantes 3MCPD & Glycidol Ester, por el uso de tecnologías de punta hace de nuestros productos la opción más viable en el mercado de grasas y sustitutos para Latinoamérica.</p>
      <p className='mb-2 text-lg'>Somos además pioneros en la extracción de Vitamina E y Fitoesteroles provenientes de la palma, convirtiéndonos así en proveedores por excelencia para la industria de alimentos y las grandes farmacéuticas.</p>
      <p className='mb-2 text-lg'>Trabajamos con talento humano cualificado, que día a día entregan lo mejor de sí para que nuestros productos lleguen al hogar de los colombianos con el toque mágico de la excelencia.</p>
      <h4 className='text-xl font-bold mt-8 mb-2'>Visión</h4>
      <p className='mb-2 text-lg'>Para el 2050 seremos una compañía de las más representativas en Colombia, el enfoque diferencial en la generación de valor, una amplia huella social, y un trabajo arduo en materia de sostenibilidad medioambiental, nos posicionará entre las 1000 mejores empresas del país.</p>
      <p className='mb-2 text-lg'>Nuestro portafolio se extenderá a grandes multinacionales; toda vez que la sofisticación de los productos dará pie para la atracción de los nuevos jugadores del mercado saludable. La transición de los antioxidantes de origen artificial como el TBHQ, hacia los antioxidantes naturales producidos en nuestra compañía serán un factor diferenciador de alto valor.</p>
      <p className='mb-2 text-lg'>REFINORTE como actor relevante e influyente de la agroindustria de la palma en Colombia y Latinoamérica, será ejemplo de crecimiento, desarrollo y modelo de lo que significa la integración vertical estratégica. La implementación en nuestra cultura organizacional de una visión holística del mercado, hará de esta compañía la iniciativa disruptiva de mayor generación de valor en la agroindustria de la palma en Colombia, con un eslogan incrustado en su ADN: “Llevar la industria hasta el campo.”</p>
      <div className='flex flex-col items-center'>
        <Image src="/images/company-modal/team-1.webp" alt="empresa" width={800} height={600} />
        <Image src="/images/company-modal/team-2.webp" alt="empresa" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/modelo-de-negocio.webp',
    alt: 'modelo de negocio',
    title: 'Modelo de negocio',
    content: <>
      <div className='flex justify-center'>
        <Image src="/images/company-modal/modelo-negocio.jpg" alt="modelo de negocio" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/portafolio.webp',
    alt: 'portafolio',
    title: 'Portafolio',
    content: <>
      <div className='flex justify-center'>
        <Image src="/images/company-modal/portafolio.jpg" alt="Portafolio" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/marcas.webp',
    alt: 'marcas',
    title: 'Nuestras marcas',
    content: <>
      <div className='flex justify-center flex-wrap'>
        <Image src="/images/company-modal/marcas.jpg" alt="Marcas" width={800} height={600} />
        <Image src="/images/company-modal/marcas-2.jpg" alt="Marcas" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/rse.webp',
    alt: 'responsabilidad social empresarial',
    title: 'Responsabilidad Social Empresarial',
    content: <>
      <div className='flex justify-center'>
        <Image src="/images/company-modal/rse.jpg" alt="responsabilidad social empresarial" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/sostenibilidad-ambiental.webp',
    alt: 'sostenibilidad ambiental',
    title: 'Sostenibilidad ambiental',
    content: <>
      <div className='flex justify-center flex-wrap'>
        <Image src="/images/company-modal/sostenibilidad-1.jpg" alt="sostenibilidad" width={800} height={600} />
        <Image src="/images/company-modal/sostenibilidad-2.jpg" alt="sostenibilidad" width={800} height={600} />
        <Image src="/images/company-modal/sostenibilidad-3.jpg" alt="sostenibilidad" width={800} height={600} />
        <Image src="/images/company-modal/sostenibilidad-4.jpg" alt="sostenibilidad" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/impacto-economico.webp',
    alt: 'impacto economico',
    title: 'Impacto económico y social',
    content: <>
      <div className='flex justify-center flex-wrap'>
        <Image src="/images/company-modal/impacto.jpg" alt="impacto social y económico" width={800} height={600} />
        <Image src="/images/company-modal/impacto-2.jpg" alt="impacto social y económico" width={800} height={600} />
      </div>
    </>
  },
  {
    src: '/company/reconocimiento.webp',
    alt: 'reconocimiento de la region',
    title: 'Reconocimiento en la región',
    content: <>
      <div className='flex justify-center'>
        <Image src="/images/company-modal/reconocimiento.jpg" alt="reconocimiento en la región" width={800} height={600} />
      </div>
    </>
  }
]

const Company = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // Valor por defecto de 4 para escritorio
  const totalSlides = Math.ceil(companyIcons.length / slidesToShow); // Total de slides

  // Función para ir a un slide específico
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Cambiar el número de slides a mostrar según el ancho de la ventana
  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 2 : 4); // Móvil: 2, Escritorio: 4
    };

    updateSlidesToShow(); // Establecer al montar el componente

    window.addEventListener('resize', updateSlidesToShow); // Escuchar cambios de tamaño de ventana
    return () => window.removeEventListener('resize', updateSlidesToShow); // Limpiar evento
  }, []);

  // Cambiar de slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [totalSlides]);

  return (
    <section className="container mx-auto">
      <div className="relative flex items-center justify-center overflow-hidden pt-32">
        {/* Carrusel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex-shrink-0 w-full flex justify-between"
              >
                {companyIcons
                  .slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow)
                  .map((icon, index) => (
                    <div key={index} className="w-full lg:w-1/4 px-2"> {/* w-1/4 asegura 4 tarjetas */}
                      <ModalCompany
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.title}
                        content={icon.content}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Puntos de navegación */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Company