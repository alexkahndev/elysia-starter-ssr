export const Testimonials = () => {
  return (
    <article className="Testimonials">
      <h1>Hear from our satisfied clients</h1>
      <section>
        {[...Array(5)].map((_, i) => (
          <img key={i} src="/assets/svg/brand_logo.svg" alt="Testimonial" />
        ))}
      </section>
    </article>
  );
};
