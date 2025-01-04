export const Navbar = () => {
	return (
	  <header
		style={{
		  backgroundColor: "#333",
		  padding: "10px 20px",
		  color: "#fff",
		  display: "flex",
		  alignItems: "center",
		  justifyContent: "space-between"
		}}
	  >
		<a href="/">
		  <img
			src="/assets/svg/brand_logo.svg"
			alt="Awesome.Social Logo"
			style={{ height: "40px" }}
		  />
		</a>
		<nav style={{ display: "flex", alignItems: "center" }}>
		  <a
			href="/portal"
			style={{
			  color: "#fff",
			  textDecoration: "none",
			  fontSize: "16px",
			  marginRight: "20px"
			}}
		  >
			Portal
		  </a>
		</nav>
	  </header>
	);
  };
