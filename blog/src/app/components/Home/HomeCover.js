import { sortBlogs } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const HomeCover = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-20 relative h-[70vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-30% to-cyan-950 rounded-3xl z-0 decoration-white" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-zinc-50">
          <Link href={blog.url}>
            <h1 className="font-bold capitalize text-3xl">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-900 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200">
                {blog.title}
              </span>
            </h1>
            <p>
              <span>
                {blog.description}
              </span>
            </p>
            <span
              className="font-normal underline underline-offset-1 inline-block px-4 bg-gray-900 rounded-3xl capitalize border-2 border-solid border-gray hover:scale-110 transition-all ease duration-200 my-10"
              href={`/categories/${blog.tags[0]}`}
            >
              #{blog.tags[0]}
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default HomeCover;
