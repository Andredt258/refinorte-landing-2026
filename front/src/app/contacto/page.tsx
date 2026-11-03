import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Contacto - ${siteConfig.name}`,
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Si deseas conocer más sobre nosotros, no dudes en comunicarte por cualquiera de nuestros medios de contacto."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
