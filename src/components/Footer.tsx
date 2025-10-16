import Link from 'next/link';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Board Members', href: '/board' },
    { name: 'Documents', href: '/documents' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Contact', href: '/contact' },
    { name: 'Emergency', href: '/emergency' }
  ],
  residents: [
    { name: 'Resident Portal', href: '/portal' },
    { name: 'Submit Request', href: '/portal/requests' },
    { name: 'Pay Dues', href: '/portal/payments' },
    { name: 'Community Events', href: '/events' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-indigo-600">Oakwood HOA</h3>
            <p className="mt-4 text-sm text-gray-600">
              Building a stronger community together through excellence in homeowners association management.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>123 Oakwood Drive</p>
              <p>Anytown, ST 12345</p>
              <p className="mt-2">
                <a href="tel:+15551234567" className="hover:text-indigo-600">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@oakwoodhoa.com" className="hover:text-indigo-600">
                  info@oakwoodhoa.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Community</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Residents</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.residents.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Office Hours</h3>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM</p>
              <p className="mt-4">Saturday</p>
              <p>10:00 AM - 2:00 PM</p>
              <p className="mt-4 text-red-600 font-medium">
                Closed Sundays & Holidays
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; 2025 Oakwood Homeowners Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}