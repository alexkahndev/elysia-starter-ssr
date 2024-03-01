export const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Awesome.Social Logo" />
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/login" className="Button">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className="Button">
              Sign Up
            </a>
          </li>
        </ul>
    </nav>
  </header>
  );
};
