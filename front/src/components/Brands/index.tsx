import { Brand } from "@/types/brand";
import Image from "next/image";
import {brandsData, partnersData} from "./brandsData";

const Brands = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="hidden lg:block lg:col-span-2 order-3 rounded-lg overflow-hidden bg-[#58ab32] justify-self-center">
          <div className="grid grid-cols-11 py-1.5 px-7">
            <div className="col-span-9 text-white font-bold">Apoyan</div>
            <div className="col-span-1 text-white font-bold flex justify-center">
              Promotor
            </div>
            <div className="col-span-1 text-white font-bold flex justify-center">
              Proveedor
            </div>
          </div>
          <div className="bg-white grid grid-cols-11 place-items-center py-2 px-7" >
            {brandsData.map((brand) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
            {partnersData.map((partner) => (
                <div
                  className="h-[100px] w-[100px]"
                  title={partner.name}
                  key={partner.id}
                >
                  <div className="flex justify-center items-center">
                    <Image src={partner.imageLight} alt={partner.name} width={90} height={90} className="hidden dark:block" />
                    <Image src={partner.image} alt={partner.name} width={90} height={90} className="block dark:hidden" />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="block lg:hidden lg:col-span-2 order-3 rounded-lg w-full bg-[#58ab32] justify-self-center">
          <div className="bg-white p-3 rounded-lg">
            <div className="grid grid-cols-2 bg-[#58ab32] rounded-full">
              <div className="col-span-1 text-white font-bold flex justify-center">
                Promotor
              </div>
              <div className="col-span-1 text-white font-bold flex justify-center">
                Proveedor
              </div>
            </div>
            <div className="grid grid-cols-2 place-items-center py-2">
              {partnersData.map((partner) => (
                <div
                  className="h-[100px] w-[100px]"
                  title={partner.name}
                  key={partner.id}
                >
                  <div className="flex justify-center items-center">
                    <Image src={partner.imageLight} alt={partner.name} width={90} height={90} className="hidden dark:block" />
                    <Image src={partner.image} alt={partner.name} width={90} height={90} className="block dark:hidden" />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 bg-[#58ab32] rounded-full">
              <div className="col-span-2 text-white font-bold flex justify-center">
                Apoyan
              </div>
            </div>
            <div className="grid grid-cols-3 place-items-center py-2 px-4">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-full items-center justify-center">
      {/* <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-[50px] w-[106px] opacity-80 transition hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
        title={name}
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a> */}

      <a
        className="relative h-[50px] w-[106px]"
        title={name}
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
