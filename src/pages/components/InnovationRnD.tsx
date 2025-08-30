/* eslint-disable @typescript-eslint/no-explicit-any */

export default function innovationRnDSection({ innovationRnDItems, innovationRnDRef }: any) {
  return (
    <section
      ref={innovationRnDRef}
      id="rnd"
      className="bg-gradient-to-r from-blue-50 via-fuchsia-50 to-yellow-50 py-10 sm:py-14 md:py-16 px-4 my-8 rounded-2xl shadow-lg animate-fade-in"
      aria-label="Innovation & R&D"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Innovation/R&D</h2>

        <div className="gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(innovationRnDItems) && innovationRnDItems.length > 0 ? (
            innovationRnDItems.map((item: any, idx: number) => (
              <div
                key={item._id || idx}
                className="border border-gray-200 p-4 sm:p-6 hover:bg-gray-50 transition group"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-2 text-sm sm:text-base">{item.overview}</p>

                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  <span className="font-medium">Team:</span> {item.team}
                </p>

                {item.focusAreas?.length > 0 && (
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">
                    <span className="font-medium">Focus Areas:</span> {item.focusAreas.join(', ')}
                  </p>
                )}

                {item.technologies?.length > 0 && (
                  <p className="text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Tech Stack:</span>{' '}
                    {item.technologies.map((tech: any) => tech.technology).join(', ')}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>No R&D items found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

