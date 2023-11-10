import { sortBlogs } from "@/app/utils";
import React from "react";

const HomeCover = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortBlogs[0]
  return (
    <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
      <Image src={blog.image.filPath.replace("../public", "")}
      placeholder="blur"
      blurDataURL={blog.image.blurhashDataUrl}
      alt={blog.title}
      fill
      className="w-full h-full object-center object-cover rounded-3xl"
      />
    </article>
  )
};

export default HomeCover;
