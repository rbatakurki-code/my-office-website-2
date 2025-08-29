export default function BlogPostsSection({ blogPosts, blogPostsRef }: any) {
  return (
        <section ref={blogPostsRef} id="blog" className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Blog">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Explore our insights, tips, and engineering best practices.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {blogPosts?.map((post: any, i: number) => (
              <div key={post._id || i} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{post.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-1">
                  <span className="font-medium">Author:</span> {post.author}
                </p>
                {/* <p className="text-gray-500 text-xs sm:text-sm mb-2">
                  <span className="font-medium">Published:</span> {new Date(post.date).toLocaleDateString()}
                </p> */}
                <p className="text-gray-700 text-sm sm:text-base line-clamp-4">{post.summary}</p>
              </div>
            ))}
          </div>

          <p className="italic text-gray-500 mt-6 text-xs sm:text-sm">
            Want more? Stay tuned for regular updates on tech trends and practices.
          </p>
        </section>
  );
}