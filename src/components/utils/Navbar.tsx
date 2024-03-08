export const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Awesome.Social Logo" />
        </a>
        <a href="/">About</a>
        <a href="/">Service</a>
        <a href="/" className="Button">
          Login
        </a>
        <a href="/" className="Button">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
