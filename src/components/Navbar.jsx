//import { useState } from "react";
import logo_img from "../assets/brand_logo.svg";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 py-4 max-w-[1600px] mx-auto">
      <a href="/">
        <img src={logo_img} alt="Awesome.Social Logo" className="h-10"/>
      </a>
      <ul>
        <li className="float-left mr-4 font-medium">
          <a href="/about" className="px-6 py-4 hover:brightness-110">About</a>
        </li>
        <li className="float-left mr-4 font-medium">
          <a href="/service" className="px-6 py-4 hover:brightness-110">Service</a>
        </li>
        <li className="float-left mr-4 font-medium">
          <a href="/log-in" className="px-6 py-4 hover:brightness-110">Log In</a>
        </li>
        <li className="float-left font-medium">
          <a href="/sign-up" className="px-6 py-4 bg-deep-sapphire text-white rounded-md hover:brightness-110">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
