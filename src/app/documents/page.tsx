import Header from '@/components/Header';
import Footer from '@/components/Footer';

const documentCategories = [
  {
    title: 'Governing Documents',
    description: 'Essential HOA legal documents and governing guidelines',
    documents: [
      { name: 'CC&Rs (Covenants, Conditions & Restrictions)', size: '2.1 MB', date: '2024-01-15', type: 'PDF' },
      { name: 'HOA Bylaws', size: '856 KB', date: '2024-01-15', type: 'PDF' },
      { name: 'Articles of Incorporation', size: '324 KB', date: '2023-12-01', type: 'PDF' },
      { name: 'Rules & Regulations', size: '1.2 MB', date: '2024-03-01', type: 'PDF' }
    ]
  },
  {
    title: 'Financial Reports',
    description: 'Budget information and financial statements',
    documents: [
      { name: '2025 Annual Budget', size: '445 KB', date: '2024-12-15', type: 'PDF' },
      { name: 'Q3 2024 Financial Statement', size: '687 KB', date: '2024-10-01', type: 'PDF' },
      { name: 'Reserve Fund Analysis', size: '523 KB', date: '2024-09-15', type: 'PDF' },
      { name: 'Audit Report 2023', size: '1.8 MB', date: '2024-02-28', type: 'PDF' }
    ]
  },
  {
    title: 'Meeting Minutes',
    description: 'Board meeting minutes and official records',
    documents: [
      { name: 'Board Meeting Minutes - October 2024', size: '234 KB', date: '2024-10-15', type: 'PDF' },
      { name: 'Board Meeting Minutes - September 2024', size: '267 KB', date: '2024-09-15', type: 'PDF' },
      { name: 'Annual Meeting Minutes 2024', size: '456 KB', date: '2024-03-20', type: 'PDF' },
      { name: 'Board Meeting Minutes - August 2024', size: '245 KB', date: '2024-08-15', type: 'PDF' }
    ]
  },
  {
    title: 'Forms & Applications',
    description: 'Downloadable forms for residents',
    documents: [
      { name: 'Architectural Request Form', size: '187 KB', date: '2024-01-15', type: 'PDF' },
      { name: 'Maintenance Request Form', size: '156 KB', date: '2024-01-15', type: 'PDF' },
      { name: 'Parking Pass Application', size: '134 KB', date: '2024-01-15', type: 'PDF' },
      { name: 'Pet Registration Form', size: '98 KB', date: '2024-01-15', type: 'PDF' }
    ]
  },
  {
    title: 'Insurance & Policies',
    description: 'Insurance certificates and policy information',
    documents: [
      { name: 'Master Insurance Policy 2024', size: '2.3 MB', date: '2024-01-01', type: 'PDF' },
      { name: 'Fidelity Bond Certificate', size: '234 KB', date: '2024-01-01', type: 'PDF' },
      { name: 'Property Insurance Summary', size: '445 KB', date: '2024-01-01', type: 'PDF' }
    ]
  }
];

export default function Documents() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              HOA Documents
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access important documents including governing documents, financial reports, 
              meeting minutes, and downloadable forms.
            </p>
          </div>
          
          <div className="mt-16 space-y-12">
            {documentCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-lg shadow-sm">
                <div className="px-6 py-8 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                </div>
                
                <div className="px-6 py-6">
                  <div className="grid gap-4">
                    {category.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-red-600 font-semibold text-sm">{doc.type}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {doc.name}
                            </p>
                            <div className="flex items-center space-x-4 mt-1">
                              <p className="text-sm text-gray-500">{doc.size}</p>
                              <p className="text-sm text-gray-500">Updated: {doc.date}</p>
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
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Access Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Public Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• CC&Rs and Bylaws</li>
                  <li>• Rules & Regulations</li>
                  <li>• Board Meeting Minutes</li>
                  <li>• Annual Budget</li>
                  <li>• Insurance Certificates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Member Access Required</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Detailed Financial Statements</li>
                  <li>• Vendor Contracts</li>
                  <li>• Executive Session Minutes</li>
                  <li>• Individual Account Information</li>
                  <li>• Legal Documents</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Some documents require resident verification. 
                Please <a href="/contact" className="underline hover:text-blue-600">contact the management office</a> 
                if you need access to restricted documents or have trouble downloading any files.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}