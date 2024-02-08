export const Banner = () => {
  return (
    <article className="banner">
      <h2>
        Our strategic social media solutions can help businesses expand their
        online presence
      </h2>
      <section>
        <article>
        <img src="/assets/business-growth.svg" alt="Business Growth Icon" />
          <h3>Business Growth</h3>
          <p>
            Unlock unparalleled growth for your business by utilizing our
            cutting-edge social media marketing services.
          </p>

          <a href="/services">Get Started</a>
        </article>
        <article>
        <img src="/assets/client-portal.svg" alt="Real-time Engagement Icon" />
          <h3>Real-time Engagement</h3>
          <p>
            Stay ahead of the curve as we transform your online presence into a
            dynamic space for continuous growth and customer satisfaction that
            you can view from your client portal.
          </p>

          <a href="/login">View Portal</a>
        </article>
        <article>
        <img src="/assets/strategy-form.svg" alt="Awesome.Social Strategy Icon" />
          <h3>Awesome.Social Strategy</h3>
          <p>
            Get your free Awesome.Social Strategy to see what actions and
            services you can do to raise your Awesome.Social Score and grow your
            business.
          </p>

          <a href="/form">Recieve Strategy</a>
        </article>
      </section>
    </article>
  );
};
