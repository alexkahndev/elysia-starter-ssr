const Testimonials = () => {
  return (
    <article className="Testimonials">
      <section>
        <h1>Hear from our satisfied clients</h1>
      </section>
      <section>
        {[...Array(5)].map((_, i) => (
          <img key={i} src="/assets/brand_logo.svg" alt="Testimonial" />
        ))}
      </section>
    </article>
  );
};

export default Testimonials;
