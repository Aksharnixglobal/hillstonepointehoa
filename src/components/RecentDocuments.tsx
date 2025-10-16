const recentDocuments = [
  {
    name: 'Oakwood Newsletter - October 2025',
    type: 'Newsletter',
    date: '2025-10-15',
    size: '2.1 MB',
    category: 'Newsletter'
  },
  {
    name: 'Board Meeting Minutes - September 2025',
    type: 'Minutes',
    date: '2025-10-01',
    size: '245 KB',
    category: 'Meeting Minutes'
  },
  {
    name: 'Updated Landscaping Guidelines',
    type: 'Guidelines',
    date: '2025-10-08',
    size: '1.2 MB',
    category: 'Rules & Guidelines'
  },
  {
    name: 'Pool Rules and Regulations 2025',
    type: 'Rules',
    date: '2025-09-25',
    size: '567 KB',
    category: 'Facilities'
  }
];

export default function RecentDocuments() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recently Added Documents
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay up-to-date with the latest HOA documents and communications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-4">
            {recentDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">PDF</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate">
                      {doc.name}
                    </p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                        {doc.category}
                      </span>
                      <p className="text-sm text-gray-500">{doc.size}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(doc.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="mr-2">👁️</span>
                    View
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="mr-2">⬇️</span>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/documents"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View All Documents
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}