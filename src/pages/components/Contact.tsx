 export default function ContactSection({ contactPage, contactRef }: any) {
  return (
        <section ref={contactRef} id="contact" className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-fuchsia-50 to-yellow-50 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Contact">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{contactPage?.title || 'Contact Us'}</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">{contactPage?.description}</p>
          <div className="space-y-1 sm:space-y-2 mb-6">
            <p className="text-xs sm:text-sm"><span className="font-medium">Address:</span> {contactPage?.address}</p>
            {/* <p className="text-xs sm:text-sm"><span className="font-medium">Phone:</span> {contactPage?.phone}</p> */}
            <p className="text-xs sm:text-sm"><span className="font-medium">Email:</span> <a href={`mailto:${contactPage?.email}`} className="text-blue-600 underline hover:text-blue-800">{contactPage?.email}</a></p>
          </div>
          {/* {contactPage?.mapEmbed && (
            <div className="mt-6 sm:mt-8 rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <iframe
                src={contactPage.mapEmbed}
                width="100%"
                height="200"
                className="sm:h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          )} */}
        </section>
  );
}
