import Link from "next/link";
import Logo from "./Logo";
import { LinkedinIcon } from "./Icons";
import { GithubIcon } from "./Icons";

export default function Header() {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between border-2 border-double border-gray-800">
      <Logo />
      <nav className="w-max py-3 px-8 border-2 border-solid rounded-full border-dark font-medium capitalize flex items-center top-6 bg-slate-850 backdrop-blur-sm border-gray-800">
        <Link href="/" className="hover:scale-110 transition-all ease duration-200 mr-2">
          Home
        </Link>
        <Link href="/blog" className="hover:scale-110 transition-all ease duration-200 mr-2">Blogs</Link>
        <a href="#" className="inline-block w-6 h-6 hover:scale-125 transition-all ease duration-200 mr-2">
          <LinkedinIcon />
        </a>
        <a href="#" className="inline-block w-6 h-6 hover:scale-125 transition-all ease duration-200">
          <GithubIcon />
        </a>
      </nav>
    </header>
  );
}
