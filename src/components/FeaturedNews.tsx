const news = [
  {
    id: 1,
    title: 'Annual HOA Meeting Scheduled',
    date: 'October 20, 2025',
    excerpt: 'Join us for the annual homeowners meeting to discuss budget, upcoming projects, and community updates.',
    category: 'Meeting'
  },
  {
    id: 2,
    title: 'Pool Maintenance Complete',
    date: 'October 10, 2025',
    excerpt: 'The community pool has completed its fall maintenance and is ready for year-round use.',
    category: 'Facilities'
  },
  {
    id: 3,
    title: 'New Landscape Guidelines',
    date: 'October 5, 2025',
    excerpt: 'Updated landscaping guidelines are now available in the documents section. Please review before making changes.',
    category: 'Guidelines'
  }
];

export default function FeaturedNews() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest News & Announcements
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed about community updates and important information.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((article) => (
            <article key={article.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-gray-500">
                  {article.date}
                </time>
                <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600">
                  {article.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#" className="hover:underline">
                    <span className="absolute inset-0" />
                    {article.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="/announcements"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View All Announcements
          </a>
        </div>
      </div>
    </div>
  );
}