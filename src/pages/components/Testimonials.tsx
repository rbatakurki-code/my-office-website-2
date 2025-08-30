/* eslint-disable @typescript-eslint/no-explicit-any */

export default function TestimonialSection({ testimonialsItems, testimonialsRef }: any) {
  return (
    <section
      ref={testimonialsRef}
      id="testimonials"
      className="max-w-5xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in"
      aria-label="Testimonials"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Testimonials</h2>
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-center md:gap-12">
          {Array.isArray(testimonialsItems) && testimonialsItems.length > 0 ? (
            testimonialsItems.map((item, index) => (
              <blockquote
                key={item._id || index}
                className={`border border-gray-200 p-4 sm:p-6 w-full md:w-1/2 animate-fade-in`}
              >
                <p className="text-base sm:text-lg italic mb-2">“{item.quote}”</p>
                <footer className="text-gray-500">— {item.author}</footer>
              </blockquote>
            ))
          ) : (
            <p className="text-gray-600 italic">No testimonials available at the moment.</p>
          )}
        </div>
      </div>
  </section>
  );
}