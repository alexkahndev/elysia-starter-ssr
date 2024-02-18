const Navbar = () => {
  return (
    <nav className="Navbar">
      <header>
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Awesome.Social Logo" />
        </a>
      </header>
      <main>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/" className="Button">
              Login
            </a>
          </li>
          <li>
            <a href="/" className="Button">
              Sign Up
            </a>
          </li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
