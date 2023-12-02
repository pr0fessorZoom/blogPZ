"use client"
import React from "react";
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const mdxComponents = {
    Image
}
const Render = ({ blog }) => {
    const MDXContent = useMDXComponent(blog.body.code)
  return <div className="col-span-10 font-semibold text-white prose prose-h2:text-slate-500"><MDXContent components={mdxComponents}/></div>;
}


export default Render