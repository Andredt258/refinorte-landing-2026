import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'});
}

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, thumbnail, description, author, categories, published, slug } = blog;
  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className="group"
      >
        <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-[#2C303B] dark:hover:shadow-gray-dark">
          <div
            className="relative block aspect-[37/22] w-full"
          >
            <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${thumbnail}`} alt="image" fill className="object-cover" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
                <span className="mb-4 block text-xl font-bold text-black dark:text-white sm:text-2xl group-hover:text-primary dark:group-hover:text-primary">
                  {title}
                </span>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              {description}
            </p>
            <div className="flex items-center">
              <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                <div className="mr-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src="/images/logo-2.png" alt="author" fill />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    REFINORTE
                  </h4>
                  <p className="text-xs text-body-color">Empresa</p>
                </div>
              </div>
              <div className="inline-block">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Fecha
                </h4>
                <p className="text-xs text-body-color">{formatDate(published)}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleBlog;
