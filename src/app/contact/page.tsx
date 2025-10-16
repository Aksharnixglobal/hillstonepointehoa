import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with the Oakwood HOA board and management company for any questions or concerns.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">HOA Management Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <span className="mr-3">📍</span>
                      123 Oakwood Drive, Suite 100<br />
                      <span className="ml-6">Anytown, ST 12345</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">📞</span>
                      <a href="tel:+15551234567" className="hover:text-indigo-600">
                        (555) 123-4567
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">📠</span>
                      (555) 123-4568
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">✉️</span>
                      <a href="mailto:info@oakwoodhoa.com" className="hover:text-indigo-600">
                        info@oakwoodhoa.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-red-600 font-medium">Closed Sundays & Holidays</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Contact</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <span className="mr-3">🚨</span>
                      <a href="tel:+15559876543" className="hover:text-indigo-600 text-red-600 font-medium">
                        (555) 987-6543
                      </a>
                    </p>
                    <p className="text-sm">Available 24/7 for maintenance emergencies</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>General Inquiry</option>
                    <option>Maintenance Request</option>
                    <option>Architectural Request</option>
                    <option>Violation Concern</option>
                    <option>Board Meeting</option>
                    <option>Billing Question</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">When are HOA dues due?</h3>
                <p className="text-gray-600 mb-4">
                  HOA dues are due on the 1st of each month. Late fees apply after the 15th.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I submit an architectural request?</h3>
                <p className="text-gray-600 mb-4">
                  Use our online portal or download the form from the Documents section. All exterior changes require approval.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What constitutes a maintenance emergency?</h3>
                <p className="text-gray-600 mb-4">
                  Water leaks, electrical issues, security problems, or any situation posing immediate danger to safety or property.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get involved in the community?</h3>
                <p className="text-gray-600 mb-4">
                  Attend board meetings, volunteer for committees, or consider running for the board during annual elections.
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