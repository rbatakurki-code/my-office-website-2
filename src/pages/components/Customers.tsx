import { urlFor } from '../../../lib/imageUrl';

export default function customerSection({ customerDetails, customerDetailsRef }: any) {
    return (
        <section
            ref={customerDetailsRef}
            id="customers"
            className="max-w-5xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in"
            aria-label="Customers"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">Customers/Clients</h2>

                {/* Responsive, auto-wrapping grid */}
                <div className="grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] items-center">
                    {Array.isArray(customerDetails) && customerDetails.length > 0 ? (
                        customerDetails.map((customer) => (
                            <a
                                key={customer._id}
                                href={customer.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <img
                                    src={urlFor(customer.logo).width(300).url()}
                                    alt={customer.name}
                                    className="h-20 sm:h-24 object-contain hover:grayscale transition duration-300"
                                />
                                <p className="mt-3 text-base sm:text-lg font-medium text-gray-700">{customer.name}</p>
                            </a>
                        ))
                    ) : (
                        <p className="text-gray-600 italic col-span-full">No customer logos available.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
