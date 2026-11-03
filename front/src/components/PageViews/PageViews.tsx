"use client";

import { useEffect } from 'react';

const PageViews = () => {
  useEffect(() => {
    const incrementPageViews = async () => {
      try {
        // Captura del user agent desde el navegador
        const userAgent = navigator.userAgent;

        // Llamada al endpoint de Django para registrar la visita
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/page-views/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_agent: userAgent }), // Enviamos el user agent
        });

        if (!response.ok) {
          console.error('Error al incrementar las visitas');
        }
      } catch (error) {
        console.error('Error en la petición:', error);
      }
    };

    // Llamamos a la función al montar el componente
    incrementPageViews();
  }, []);

  return null; // No necesita renderizar nada en la UI
};

export default PageViews;
