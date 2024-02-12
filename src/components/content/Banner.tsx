export const Banner = () => {
  return (
    <article className="Banner">
      <header>
        <h1>
          Our strategic social media solutions can help businesses expand their
          online presence
        </h1>
      </header>
      <main>
        <section className="Banner__Card">
          <header>
            <img src="/assets/business-growth.svg" alt="Business Growth Icon" />
            <h2>Business Growth</h2>
          </header>
          <main>
            <p>
              Unlock unparalleled growth for your business by utilizing our
              cutting-edge social media marketing services.
            </p>
          </main>
          <footer>
            <a href="/services">Get Started</a>
          </footer>
        </section>
        <section className="Banner__Card">
          <header>
            <img
              src="/assets/client-portal.svg"
              alt="Real-time Engagement Icon"
            />
            <h2>Real-time Engagement</h2>
          </header>
          <main>
            <p>
              Stay ahead of the curve as we transform your online presence into
              a dynamic space for continuous growth and customer satisfaction
              that you can view from your client portal.
            </p>
          </main>
          <footer>
            <a href="/login" className="Button">
              View Portal
            </a>
          </footer>
        </section>
        <section className="Banner__Card">
          <header>
            <img
              src="/assets/strategy-form.svg"
              alt="Awesome.Social Strategy Icon"
            />
            <h2>Awesome.Social Strategy</h2>
          </header>
          <main>
            <p>
              Get your free Awesome.Social Strategy to see what actions and
              services you can do to raise your Awesome.Social Score and grow
              your business.
            </p>
          </main>
          <footer>
            <a href="/form">Recieve Strategy</a>
          </footer>
        </section>
      </main>
    </article>
  );
};

export default Banner;
