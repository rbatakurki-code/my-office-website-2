import { PortableText } from '@portabletext/react';

export default function AboutSection({ aboutPage, aboutRef }: any) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in"
      aria-label="About"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">About SignificMinds</h2>

      {aboutPage?.overview && (
        <div className="text-base sm:text-lg text-gray-700 mb-6 space-y-4">
          <PortableText value={aboutPage.overview} />
        </div>
      )}

      {aboutPage?.mission && (
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-1">🎯 Our Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base">{aboutPage.mission}</p>
        </div>
      )}

      {aboutPage?.vision && (
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-1">🌍 Our Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base">{aboutPage.vision}</p>
        </div>
      )}

      {aboutPage?.coreValues?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">🧭 Our Core Values</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutPage.coreValues.map((value: any, idx: number) => (
              <li key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 font-medium text-green-600">
                  ✅ {value.title}
                </div>
                <p className="text-sm text-gray-700">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {aboutPage?.services?.length > 0 && (
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">🛠️ What We Offer</h3>
          <ul className="list-disc pl-5 text-sm sm:text-base text-gray-700 space-y-1">
            {aboutPage.services.map((service: any, idx: number) => (
              <li key={idx}>{service.title}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
