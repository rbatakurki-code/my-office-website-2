/* eslint-disable @typescript-eslint/no-explicit-any */

export default function CareerSection({ careerPage, careerRef }: any) {
  return (
        <section ref={careerRef} id="careers" className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Careers">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Careers</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">{careerPage?.intro}</p>
          <div className="space-y-4 sm:space-y-6">
            {careerPage?.openings?.map((job: any, i: number) => (
              <div key={i} className="border border-gray-200 p-4 sm:p-6 hover:bg-gray-50 transition">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-1 text-sm sm:text-base"><span className="font-medium">Location:</span> {job.location}</p>
                <p className="text-gray-500 mb-1 text-xs sm:text-sm"><span className="font-medium">Type:</span> {job.type}</p>
                <p className="text-gray-700 text-sm sm:text-base">{job.description}</p>
              </div>
            ))}
          </div>
          <p className="italic text-gray-500 mt-6 text-xs sm:text-sm">{careerPage?.note}</p>
        </section>
  );
}