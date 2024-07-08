import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-whitepy-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="2b" width={40} height={40} />
      </Link>
    </div>
  );
};

export default Navbar;
