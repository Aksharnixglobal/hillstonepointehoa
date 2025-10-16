import Header from '@/components/Header';
import Footer from '@/components/Footer';

const announcements = [
  {
    id: 1,
    title: 'Pool Maintenance Schedule - October 2025',
    date: '2025-10-12',
    category: 'Facilities',
    urgent: false,
    excerpt: 'The community pool will undergo routine maintenance from October 25-27. Pool will be closed during this period.',
    content: `Dear Residents,

The community pool will be temporarily closed for routine maintenance and cleaning from Thursday, October 25th through Saturday, October 27th, 2025.

During this time, our maintenance team will:
• Deep clean and balance pool chemicals
• Inspect and service pool equipment
• Clean pool deck and furniture
• Test safety equipment

The pool will reopen on Sunday, October 28th at 6:00 AM. We apologize for any inconvenience and appreciate your understanding.

If you have any questions, please contact the management office at (555) 123-4567.

Best regards,
Oakwood HOA Management`
  },
  {
    id: 2,
    title: 'Annual HOA Meeting - November 15, 2025',
    date: '2025-10-10',
    category: 'Meeting',
    urgent: true,
    excerpt: 'Mark your calendars! The annual homeowners meeting is scheduled for November 15th at 7:00 PM in the community center.',
    content: `Important Notice: Annual Homeowners Meeting

Date: Thursday, November 15, 2025
Time: 7:00 PM
Location: Community Center - Main Hall
Virtual Option: Zoom link will be provided

AGENDA ITEMS:
• Review of 2025 financial performance
• Presentation of 2026 budget proposal
• Board member elections
• Capital improvement projects update
• Community enhancement initiatives
• Q&A session

This is your opportunity to:
• Vote on important community matters
• Meet your board members
• Voice concerns and suggestions
• Learn about upcoming projects

Light refreshments will be served. Please bring a form of ID for voting purposes.

RSVP by November 10th to ensure adequate seating and refreshments.

For more information, contact the management office or visit our website.`
  },
  {
    id: 3,
    title: 'New Landscaping Guidelines Effective November 1st',
    date: '2025-10-08',
    category: 'Guidelines',
    urgent: false,
    excerpt: 'Updated landscaping and architectural guidelines will take effect November 1st. Please review the new requirements.',
    content: `Updated Landscaping Guidelines

Effective Date: November 1, 2025

The Board has approved updated landscaping guidelines to maintain our community's beautiful appearance and property values.

KEY UPDATES:
• Native plant requirements for drought resistance
• New color palette for exterior paint
• Enhanced fence and hardscape standards
• Updated tree maintenance requirements

WHAT THIS MEANS FOR YOU:
• All new landscaping projects must follow new guidelines
• Existing landscapes are grandfathered (no immediate changes required)
• ACC approval required for major landscape modifications
• Professional design consultation available

The complete guidelines document is available in the Documents section of our website.

FREE CONSULTATION:
Our approved landscape consultant will be available for FREE consultations on November 5th and 12th. Sign up at the management office.

Questions? Contact the Architectural Control Committee at acc@oakwoodhoa.com`
  },
  {
    id: 4,
    title: 'Lost Pet Alert - Missing Cat "Whiskers"',
    date: '2025-10-05',
    category: 'Community',
    urgent: true,
    excerpt: 'Orange tabby cat missing from Oak Street area since October 3rd. Please check your garages and sheds.',
    content: `LOST PET ALERT

Pet: Cat named "Whiskers"
Missing Since: October 3, 2025
Location: Last seen near 450 Oak Street
Description: 
• Orange tabby with white chest
• Male, neutered, microchipped
• Wearing blue collar with bell
• Very friendly and responds to name

WHAT YOU CAN DO:
• Check your garages, sheds, and crawl spaces
• Look under porches and in bushes
• Report any sightings immediately
• Do not chase if spotted - he may run

CONTACT INFORMATION:
If found or spotted, please contact:
• Owner: Sarah Miller - (555) 234-5678
• Management Office: (555) 123-4567
• Report through our Lost & Found Pet system

Whiskers is an indoor cat and may be scared. He is microchipped and registered. 

Thank you for helping bring Whiskers home safely!`
  },
  {
    id: 5,
    title: 'Parking Enforcement Reminder',
    date: '2025-10-01',
    category: 'Rules',
    urgent: false,
    excerpt: 'Reminder about parking regulations including guest parking, overnight restrictions, and permit requirements.',
    content: `Parking Regulation Reminder

As we continue to grow as a community, it's important to review our parking guidelines to ensure adequate parking for all residents and guests.

PARKING REMINDERS:
• Resident vehicles must display current parking permits
• Guest parking is limited to 48 hours without management approval
• No parking on grass areas or sidewalks
• Commercial vehicles require special permits
• Abandoned vehicles will be towed at owner's expense

GUEST PARKING:
• Use designated guest spots only
• Notify management for extended guest stays
• Guest passes available at management office
• Maximum 2 guest vehicles per household

VIOLATIONS:
First offense: Warning notice
Second offense: $25 fine
Third offense: $50 fine + possible towing

GETTING PERMITS:
• Visit the management office with vehicle registration
• Permits must be renewed annually
• Lost permits can be replaced for $5

Questions about parking? Contact the management office at (555) 123-4567.

Thank you for helping keep our parking areas organized and accessible for everyone!`
  }
];

export default function Announcements() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Community Announcements
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay informed about important community updates, events, and information affecting all residents.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {announcements.map((announcement) => (
                <article key={announcement.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          announcement.category === 'Meeting' ? 'bg-blue-100 text-blue-800' :
                          announcement.category === 'Facilities' ? 'bg-green-100 text-green-800' :
                          announcement.category === 'Guidelines' ? 'bg-purple-100 text-purple-800' :
                          announcement.category === 'Community' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {announcement.category}
                        </span>
                        {announcement.urgent && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            🚨 Urgent
                          </span>
                        )}
                      </div>
                      <time className="text-sm text-gray-500">
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {announcement.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {announcement.excerpt}
                    </p>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <div className="prose prose-sm max-w-none">
                        <div className="whitespace-pre-line text-gray-700">
                          {announcement.content}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Share
                        </button>
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Print
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        Posted by Oakwood HOA Management
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-16 bg-indigo-600 rounded-lg shadow-lg">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Stay Updated
                </h2>
                <p className="mt-4 text-lg leading-8 text-indigo-200">
                  Subscribe to our newsletter to receive important announcements directly in your inbox.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder:text-indigo-200 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    className="flex-none rounded-md bg-white px-4 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}