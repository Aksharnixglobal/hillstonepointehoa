import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ACCRequest() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Architectural Control Committee Request
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Submit your request for any exterior modifications, additions, or changes to your property.
            </p>
          </div>

          {/* Important Notice */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-yellow-600 text-xl">⚠️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Important: ACC Approval Required
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    According to the HOA governing documents, written approval from the Architectural Control Committee 
                    is required BEFORE starting any exterior modifications, repairs, replacements, additions, or removals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACC Request Form */}
          <div className="mt-16 bg-white shadow-sm rounded-lg">
            <div className="px-6 py-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">ACC Request Form</h2>
              <p className="mt-2 text-gray-600">Please provide detailed information about your proposed project.</p>
            </div>

            <form className="px-6 py-8 space-y-8">
              {/* Property Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="property-address" className="block text-sm font-medium text-gray-700">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      name="property-address"
                      id="property-address"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lot-number" className="block text-sm font-medium text-gray-700">
                      Lot Number
                    </label>
                    <input
                      type="text"
                      name="lot-number"
                      id="lot-number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="owner-name" className="block text-sm font-medium text-gray-700">
                      Property Owner Name *
                    </label>
                    <input
                      type="text"
                      name="owner-name"
                      id="owner-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="mailing-address" className="block text-sm font-medium text-gray-700">
                      Mailing Address (if different)
                    </label>
                    <input
                      type="text"
                      name="mailing-address"
                      id="mailing-address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-700">
                      Type of Project *
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="">Select project type</option>
                      <option value="fence">Fence Installation/Repair</option>
                      <option value="deck-patio">Deck/Patio Addition</option>
                      <option value="exterior-paint">Exterior Paint/Color Change</option>
                      <option value="roofing">Roofing Repair/Replacement</option>
                      <option value="siding">Siding Repair/Replacement</option>
                      <option value="windows-doors">Windows/Doors Replacement</option>
                      <option value="landscaping">Major Landscaping</option>
                      <option value="driveway">Driveway/Walkway Work</option>
                      <option value="storage">Storage Building/Shed</option>
                      <option value="pool-spa">Pool/Spa Installation</option>
                      <option value="solar">Solar Panel Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="project-description" className="block text-sm font-medium text-gray-700">
                      Detailed Project Description *
                    </label>
                    <textarea
                      name="project-description"
                      id="project-description"
                      rows={4}
                      required
                      placeholder="Please provide a detailed description of the proposed work, including materials, colors, dimensions, and location on your property."
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                        Proposed Start Date *
                      </label>
                      <input
                        type="date"
                        name="start-date"
                        id="start-date"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="completion-date" className="block text-sm font-medium text-gray-700">
                        Expected Completion Date *
                      </label>
                      <input
                        type="date"
                        name="completion-date"
                        id="completion-date"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contractor-info" className="block text-sm font-medium text-gray-700">
                      Contractor Information (if applicable)
                    </label>
                    <textarea
                      name="contractor-info"
                      id="contractor-info"
                      rows={3}
                      placeholder="Contractor name, license number, contact information"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Supporting Documents</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Plans, Photos, or Specifications
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <div className="text-3xl text-gray-400">📎</div>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload files</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, JPG, PNG, DOC up to 10MB each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      required
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreement" className="text-gray-700">
                      I certify that the information provided is accurate and complete. I understand that 
                      work cannot begin until written approval is received from the ACC Committee. I agree 
                      to comply with all HOA governing documents and architectural guidelines. *
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-indigo-600 py-3 px-6 text-sm font-semibold text-white shadow-sm rounded-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit ACC Request
                </button>
              </div>
            </form>
          </div>

          {/* Process Information */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Submission</h3>
                <p className="text-gray-600">
                  Submit your complete application with all required documentation and fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Review</h3>
                <p className="text-gray-600">
                  The ACC Committee will review your request within 30 days of receipt.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Decision</h3>
                <p className="text-gray-600">
                  You will receive written notification of approval, denial, or request for modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}