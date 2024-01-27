import logo_img from "../../assets/svg/brand_logo.svg";

export const Navbar = () => {
  
  return (
    <div className="flex justify-between items-center px-8 py-4 max-w-[1600px] mx-auto">
      <a href="/">
        <img src={logo_img} alt="Awesome.Social Logo" className="h-10"/>
      </a>
      <ul>
        <li className="inline-block mr-4">
          <a href="/about" className="px-2 py-1 text-center">About</a>
        </li>
        <li className="inline-block mr-4">
          <a href="/service" className="px-2 py-1 text-center">Service</a>
        </li>
        <li className="inline-block">
          <button className="bg-deep-sapphire px-8 py-4 text-center text-white rounded-md">Log In</button>
        </li>
      </ul>
    </div>
  );
};