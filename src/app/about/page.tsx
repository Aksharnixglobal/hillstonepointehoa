import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Oakwood Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Oakwood, a premier residential community committed to maintaining 
              high standards of living and preserving property values for all our residents.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Mission</h2>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    To provide exceptional community management services that enhance property values, 
                    promote harmonious living, and maintain the beautiful standards that make Oakwood 
                    a desirable place to call home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏊‍♂️ Community Pool</h3>
                <p className="text-gray-600">
                  Year-round heated swimming pool with separate children&apos;s area and poolside amenities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏞️ Parks & Recreation</h3>
                <p className="text-gray-600">
                  Multiple playgrounds, walking trails, and green spaces for outdoor activities and relaxation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Community Center</h3>
                <p className="text-gray-600">
                  Modern facility available for events, meetings, and community gatherings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🚗 Parking</h3>
                <p className="text-gray-600">
                  Ample parking spaces with designated areas for residents and guests.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌳 Landscaping</h3>
                <p className="text-gray-600">
                  Professional landscaping maintenance ensuring beautiful common areas year-round.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔒 Security</h3>
                <p className="text-gray-600">
                  24/7 security monitoring and controlled access for resident safety and peace of mind.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">HOA Management</h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600 leading-relaxed">
                Oakwood Homeowners Association is professionally managed by Premier Property Management, 
                ensuring efficient operations and responsive service to our residents. Our board of directors, 
                elected by the community, works closely with management to make decisions that benefit all residents.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Management Company</h3>
                  <p className="text-gray-600">Premier Property Management</p>
                  <p className="text-gray-600">Licensed & Insured</p>
                  <p className="text-gray-600">Serving HOAs since 1995</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
                  <p className="text-gray-600">Established: 2010</p>
                  <p className="text-gray-600">Total Units: 142</p>
                  <p className="text-gray-600">Community Size: 15 acres</p>
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