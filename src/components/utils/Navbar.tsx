const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__Brand">
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Awesome.Social Logo" />
        </a>
      </div>
      <div className="Navbar__Menu">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/" className="Navbar__Button">Login</a>
          </li>
          <li>
            <a href="/" className="Navbar__Button">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
