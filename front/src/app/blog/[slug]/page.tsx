// import SharePost from "@/components/Blog/SharePost";
import PostDetails from "@/components/Blog/PostDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | REFINORTE",
  description: "Cosechamos la excelencia, refinamos el futuro.",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <PostDetails />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
