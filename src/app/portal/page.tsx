import Header from '@/components/Header';
import Footer from '@/components/Footer';

const portalFeatures = [
  {
    title: 'ACC Request Form',
    description: 'Submit architectural control committee requests for any exterior modifications',
    icon: '🏗️',
    href: '/portal/acc-request',
    status: 'Available'
  },
  {
    title: 'Payment Plan Request',
    description: 'Request a payment plan for HOA dues or special assessments',
    icon: '💰',
    href: '/portal/payment-plan',
    status: 'Available'
  },
  {
    title: 'Pool Access Request',
    description: 'Request pool access cards and review pool rules',
    icon: '🏊‍♂️',
    href: '/portal/pool-access',
    status: 'Available'
  },
  {
    title: 'Maintenance Request',
    description: 'Report common area maintenance issues or concerns',
    icon: '🔧',
    href: '/portal/maintenance',
    status: 'Available'
  },
  {
    title: 'Neighborhood Directory',
    description: 'Access the resident directory and contact information',
    icon: '📋',
    href: '/portal/directory',
    status: 'Members Only'
  },
  {
    title: 'Committee Participation',
    description: 'Join HOA committees and volunteer for community projects',
    icon: '👥',
    href: '/portal/committees',
    status: 'Available'
  }
];

const quickActions = [
  {
    title: 'Pay HOA Dues',
    description: 'Make secure online payments',
    icon: '💳',
    href: '/portal/payments'
  },
  {
    title: 'View Account',
    description: 'Check balance and payment history',
    icon: '📊',
    href: '/portal/account'
  },
  {
    title: 'Download Documents',
    description: 'Access forms and HOA documents',
    icon: '📄',
    href: '/documents'
  },
  {
    title: 'Contact Management',
    description: 'Get in touch with property management',
    icon: '📞',
    href: '/contact'
  }
];

export default function Portal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Resident Portal
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access exclusive resident services, submit requests, and manage your HOA account online.
            </p>
          </div>

          {/* Login Notice */}
          <div className="mx-auto mt-16 max-w-2xl bg-blue-50 rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">ℹ️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Resident Registration Required
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Some features require resident verification. 
                    <a href="/portal/register" className="font-medium underline hover:text-blue-600 ml-1">
                      Register here
                    </a> or 
                    <a href="/portal/login" className="font-medium underline hover:text-blue-600 ml-1">
                      sign in
                    </a> to access all portal features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action) => (
                <a
                  key={action.title}
                  href={action.href}
                  className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <span className="text-3xl mb-4 block">{action.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Portal Features */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Resident Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portalFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      feature.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <a
                    href={feature.href}
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Access Service
                    <span className="ml-1">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Account Status */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Online payment portal</li>
                  <li>• Automatic bank draft</li>
                  <li>• Payment by check</li>
                  <li>• Payment plans available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Dates</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dues due: 1st of each month</li>
                  <li>• Late fees apply after 15th</li>
                  <li>• Annual meeting: March</li>
                  <li>• Budget review: December</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <a href="/contact" className="text-indigo-600 hover:text-indigo-500">Contact management</a></li>
                  <li>• <a href="/documents" className="text-indigo-600 hover:text-indigo-500">Download forms</a></li>
                  <li>• <a href="/portal/faq" className="text-indigo-600 hover:text-indigo-500">View FAQ</a></li>
                  <li>• Emergency: (555) 987-6543</li>
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