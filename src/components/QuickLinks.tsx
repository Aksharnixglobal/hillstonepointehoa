const features = [
  {
    name: 'Submit a Request',
    description: 'Report maintenance issues or submit architectural requests online.',
    href: '/portal/requests',
    icon: '📝'
  },
  {
    name: 'HOA Documents',
    description: 'Access bylaws, CC&Rs, meeting minutes, and financial reports.',
    href: '/documents',
    icon: '📄'
  },
  {
    name: 'Pay HOA Dues',
    description: 'Make secure online payments for your monthly HOA fees.',
    href: '/portal/payments',
    icon: '💳'
  },
  {
    name: 'Community Events',
    description: 'Stay updated on upcoming community events and activities.',
    href: '/events',
    icon: '🎉'
  },
  {
    name: 'Contact Board',
    description: 'Get in touch with board members and management company.',
    href: '/contact',
    icon: '📞'
  },
  {
    name: 'Emergency Info',
    description: 'Important emergency contacts and procedures.',
    href: '/emergency',
    icon: '🚨'
  }
];

export default function QuickLinks() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Quick Access</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resident Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access important resources and services for Oakwood community residents.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-2xl">{feature.icon}</span>
                  <a 
                    href={feature.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {feature.name}
                  </a>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}