/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ServicesSection({ servicesPage, servicesRef }: any) {
    return (
        <section ref={servicesRef} id="services" className="max-w-5xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Services">
            <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.isArray(servicesPage?.services) && servicesPage.services.length > 0 ? (
                servicesPage.services.map((service: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition group">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition">{service.title}</h3>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">{service.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500"><span className="font-medium">Tech Stack:</span> {service.techStack}</p>
                    </div>
                ))
                ) : (
                <p>No services found.</p>
                )}
            </div>
            </div>
        </section>
    );
}
