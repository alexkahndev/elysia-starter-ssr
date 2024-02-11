const Testimonials = () => {
  return (
    <article className="Testimonials">
      <div>
        <h1>Hear from our satisfied clients</h1>
      </div>
      <div>
        {[...Array(5)].map((_, i) => (
          <img key={i} src="/assets/brand_logo.svg" alt="Testimonial" />
        ))}
      </div>
    </article>
  );
};

export default Testimonials;
