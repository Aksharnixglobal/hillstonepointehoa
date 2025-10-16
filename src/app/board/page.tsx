import Header from '@/components/Header';
import Footer from '@/components/Footer';

const boardMembers = [
  {
    name: 'Sarah Johnson',
    role: 'President',
    term: '2024-2026',
    email: 'president@oakwoodhoa.com',
    bio: 'Sarah has been a resident of Oakwood for 8 years and brings extensive experience in community management and financial planning.',
    focus: 'Strategic planning and community development'
  },
  {
    name: 'Michael Chen',
    role: 'Vice President',
    term: '2024-2026',
    email: 'vicepresident@oakwoodhoa.com',
    bio: 'Michael is a local business owner with expertise in operations and vendor management. He has served on the board for 4 years.',
    focus: 'Facilities management and vendor relations'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Secretary',
    term: '2023-2025',
    email: 'secretary@oakwoodhoa.com',
    bio: 'Emily works as a corporate attorney and ensures all HOA documentation and legal compliance is maintained properly.',
    focus: 'Legal compliance and documentation'
  },
  {
    name: 'David Thompson',
    role: 'Treasurer',
    term: '2023-2025',
    email: 'treasurer@oakwoodhoa.com',
    bio: 'David is a CPA who oversees the financial health of our community and ensures transparent budget management.',
    focus: 'Financial oversight and budget planning'
  },
  {
    name: 'Lisa Park',
    role: 'Board Member',
    term: '2024-2026',
    email: 'board@oakwoodhoa.com',
    bio: 'Lisa has been a resident for 6 years and is passionate about community events and resident engagement.',
    focus: 'Community events and resident relations'
  }
];

export default function Board() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Board of Directors
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the dedicated volunteers who govern our community and work to maintain 
              Oakwood&apos;s high standards.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-indigo-600 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-500">Term: {member.term}</p>
                    </div>
                    <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-md">
                    <p className="text-xs font-medium text-gray-900 mb-1">Focus Area:</p>
                    <p className="text-sm text-gray-600">{member.focus}</p>
                  </div>
                  
                  <div className="mt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Board Meeting Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regular Meetings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>📅 Third Thursday of each month</li>
                  <li>🕕 7:00 PM - 9:00 PM</li>
                  <li>📍 Community Center - Main Hall</li>
                  <li>👥 Open to all residents</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Meeting</h3>
                <div className="bg-indigo-50 p-4 rounded-md">
                  <p className="font-semibold text-indigo-900">November 21, 2025</p>
                  <p className="text-indigo-700">7:00 PM</p>
                  <p className="text-indigo-600 text-sm mt-2">
                    Agenda includes budget review and landscape enhancement proposals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact the Board</h3>
              <p className="text-gray-600 mb-4">
                Have questions or concerns? The board welcomes input from all residents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:board@oakwoodhoa.com"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Email the Board
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Submit a Formal Request
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}