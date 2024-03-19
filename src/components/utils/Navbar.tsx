export const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <a href="/">
          <img src="/assets/brand_logo.svg" alt="Awesome.Social Logo" />
        </a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/faq">FAQ</a>
        <a href="/login" className="Button">
          Login
        </a>
        <a href="/signup" className="Button">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
