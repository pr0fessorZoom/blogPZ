import Image from "next/image";
import Link from "next/link";
import pzoom from "src/app/img/pzoom.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark hover:scale-105 transition-all ease duration-200">
      <div className="w-16 overflow-hidden mr-4">
        <Image
          src={pzoom}
          alt="Professor Zoom Logo"
          className="w-full h-auto"
        />
      </div>
      <span className="font-bold text-xl">ProfessorZoom</span>
    </Link>
  );
}

export default Logo