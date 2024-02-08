export const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Home" />
        </a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/login" className="button">
          Log In
        </a>
        <a href="/signup" className="button">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
