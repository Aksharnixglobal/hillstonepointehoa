import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Payments() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pay HOA Dues Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Convenient and secure online payment options for your monthly HOA dues and assessments.
            </p>
          </div>

          {/* Payment Options */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* One-Time Payment */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">One-Time Payment</h3>
                <p className="text-gray-600 mb-6">
                  Make a single payment for your current HOA dues or special assessments.
                </p>
                <a
                  href="https://payments.example.com/oakwood-hoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Pay Now
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>

            {/* Auto-Pay Setup */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto-Pay Setup</h3>
                <p className="text-gray-600 mb-6">
                  Set up automatic monthly payments and never worry about late fees.
                </p>
                <a
                  href="https://payments.example.com/oakwood-hoa/autopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Setup Auto-Pay
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Account Access */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">View Your Account</h2>
              <p className="text-gray-600">
                Access your payment history, account balance, and statements online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://account.example.com/oakwood-hoa"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="text-center">
                  <span className="text-3xl block mb-3">📊</span>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Balance</h3>
                  <p className="text-sm text-gray-600">View current balance and payment due dates</p>
                </div>
              </a>
              
              <a
                href="https://account.example.com/oakwood-hoa/history"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="text-center">
                  <span className="text-3xl block mb-3">📋</span>
                  <h3 className="font-semibold text-gray-900 mb-2">Payment History</h3>
                  <p className="text-sm text-gray-600">Review past payments and transactions</p>
                </div>
              </a>
              
              <a
                href="https://account.example.com/oakwood-hoa/statements"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="text-center">
                  <span className="text-3xl block mb-3">📄</span>
                  <h3 className="font-semibold text-gray-900 mb-2">Statements</h3>
                  <p className="text-sm text-gray-600">Download monthly and annual statements</p>
                </div>
              </a>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Dues</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard Monthly Dues:</span>
                    <span className="font-medium">$125.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium">1st of each month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grace Period:</span>
                    <span className="font-medium">Until 15th</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Late Fee:</span>
                    <span className="font-medium">$25.00</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Credit/Debit Cards (Visa, MasterCard, Discover)</li>
                  <li>• Bank Account (ACH/E-Check)</li>
                  <li>• Online Banking Bill Pay</li>
                  <li>• Check by mail</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Convenience Fee:</strong> $2.95 for credit/debit cards. 
                    ACH payments are free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment by Check */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment by Check</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mail Payments To:</h3>
                <div className="space-y-1 text-gray-600">
                  <p className="font-medium">Oakwood HOA</p>
                  <p>c/o Premier Property Management</p>
                  <p>PO Box 12345</p>
                  <p>Anytown, ST 12345-6789</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Include your property address in memo line</li>
                  <li>• Allow 5-7 business days for processing</li>
                  <li>• Make checks payable to &quot;Oakwood HOA&quot;</li>
                  <li>• Keep copies of all payments for your records</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>📞 Payment Hotline: (555) 123-4567</p>
                  <p>✉️ Email: payments@oakwoodhoa.com</p>
                  <p>🕒 Office Hours: Mon-Fri 9AM-5PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Questions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <a href="/portal/payment-plan" className="text-indigo-600 hover:text-indigo-500">Request payment plan</a></li>
                  <li>• <a href="/contact" className="text-indigo-600 hover:text-indigo-500">Report payment issues</a></li>
                  <li>• <a href="/documents" className="text-indigo-600 hover:text-indigo-500">Download payment forms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}