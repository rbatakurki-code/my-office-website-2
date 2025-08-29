export default function ProjectsSection({ portfolioItem, projectsRef }: any) {
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="max-w-5xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in"
      aria-label="Projects"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="gap-6 sm:gap-8 md:grid-cols-2">
        {portfolioItem && portfolioItem.length > 0 ? (
          portfolioItem.map((item: any, idx: number) => (
            <div
              key={item._id || idx}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>

              <div className="mb-3">
                <span className="font-semibold text-sm text-gray-800 mb-1">Client:</span> {item.client}
              </div>

              <p className="text-gray-700 text-sm sm:text-base mb-4">{item.overview}</p>

              {/* Features */}
              {item.features?.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">Key Features:</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                    {item.features.map((feature: any) => (
                      <li key={feature._key}>
                        <span className="font-medium">{feature.feature}</span>: {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {item.technology?.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">Technology Stack:</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                    {item.technology.map((tech: any) => (
                      <li key={tech._key}>
                        <span className="font-medium">{tech.technology}</span>: {tech.details}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact */}
              {item.impact?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">Impact:</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                    {item.impact.map((impact: any) => (
                      <li key={impact._key}>{impact.details}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>

  );
}
