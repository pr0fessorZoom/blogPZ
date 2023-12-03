"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LinkedinIcon } from "./Icons";
import { GithubIcon } from "./Icons";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block md:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-gray-500 rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-gray-500 rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-gray-500 rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      <nav
        className="w-max py-3 px-6 md:px-8 border-2 border-solid rounded-full border-dark font-medium capitalize  items-center flex md:hidden top-6 right-1/2 translate-x-1/2 bg-slate-850 fixed backdrop-blur-sm border-gray-700 z-50
        transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem"
        }}
      >
        <Link
          href="/"
          className="hover:scale-110 transition-all ease duration-200 mr-2"
        >
          Home
        </Link>
        <Link
          href="/Bloglist"
          className="hover:scale-110 transition-all ease duration-200 mr-2"
        >
          Blogs
        </Link>
        <a
          href="https://www.linkedin.com/in/sebaohberg/"
          className="inline-block w-6 h-6 hover:scale-125 transition-all ease duration-200 mr-2"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/pr0fessorZoom"
          className="inline-block w-6 h-6 hover:scale-125 transition-all ease duration-200"
        >
          <GithubIcon />
        </a>
      </nav>
      <nav className="w-max py-3 px-8 border-2 border-solid rounded-full border-dark font-medium capitalize  items-center top-6 bg-slate-850 backdrop-blur-sm border-gray-700 hidden md:flex">
        <Link
          href="/"
          className="hover:scale-110 transition-all ease duration-200 mr-2"
        >
          Home
        </Link>
        <Link
          href="/Bloglist"
          className="hover:scale-110 transition-all ease duration-200 mr-2"
        >
          Blogs
        </Link>
        <a
          href="https://www.linkedin.com/in/sebaohberg/"
          className="inline-block w-6 h-6 hover:scale-125 transition-all ease duration-200 mr-2"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/pr0fessorZoom"
          className="inline-block w-6 h-6 hover:scale-125 transition-all ease duration-200"
        >
          <GithubIcon />
        </a>
      </nav>
    </header>
  );
}
