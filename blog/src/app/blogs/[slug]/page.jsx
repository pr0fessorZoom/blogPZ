import Render from "@/app/components/Blog/RenderMdx";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[75vh] bg-slate-900">
        <div className="w-[50%] z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-1 mx-2 font-semibold capitalize text-white text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-black/60">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-[100vw] h-[75vh] object-cover object-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div></div>
        <Render blog={blog}/>
      </div>
    </article>
  );
}
