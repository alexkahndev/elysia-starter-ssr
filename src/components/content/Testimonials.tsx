export const Testimonials = () => {
    return (
        <article className="testimonials">
            <h2>Hear from our satisfied clients</h2>
            {[...Array(5)].map((_, i) => (
                <img
                    key={i}
                    src="/assets/brand_logo.svg"
                    alt="Testimonial"
                />
            ))}
        </article>
    )
}