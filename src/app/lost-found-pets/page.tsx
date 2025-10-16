import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lostFoundPets = [
  {
    id: 1,
    type: 'Lost',
    petType: 'Cat',
    name: 'Whiskers',
    breed: 'Orange Tabby',
    color: 'Orange with white chest',
    size: 'Medium',
    lastSeen: '2025-10-03',
    location: '450 Oak Street area',
    description: 'Friendly male cat wearing blue collar with bell. Responds to name "Whiskers". Indoor cat, may be hiding.',
    contact: 'Sarah Miller - (555) 234-5678',
    dateReported: '2025-10-05',
    image: '/images/placeholder-cat.jpg'
  },
  {
    id: 2,
    type: 'Found',
    petType: 'Dog',
    name: 'Unknown',
    breed: 'Golden Retriever Mix',
    color: 'Golden/Light Brown',
    size: 'Large',
    lastSeen: '2025-10-10',
    location: 'Found near Community Center',
    description: 'Friendly dog, well-groomed, appears to be house-trained. No collar or ID tags. Estimated 3-4 years old.',
    contact: 'Management Office - (555) 123-4567',
    dateReported: '2025-10-10',
    image: '/images/placeholder-dog.jpg'
  },
  {
    id: 3,
    type: 'Lost',
    petType: 'Cat',
    name: 'Shadow',
    breed: 'Domestic Shorthair',
    color: 'Black',
    size: 'Small',
    lastSeen: '2025-10-08',
    location: 'Maple Drive area',
    description: 'Small black cat with green eyes. Very shy and skittish. May be hiding in garages or under porches.',
    contact: 'Mike Johnson - (555) 345-6789',
    dateReported: '2025-10-09',
    image: '/images/placeholder-cat.jpg'
  }
];

export default function LostFoundPets() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Lost & Found Pets
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Help reunite pets with their families in the Oakwood community.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/lost-found-pets/report"
              className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Report Lost Pet
            </a>
            <a
              href="/lost-found-pets/report"
              className="rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Report Found Pet
            </a>
          </div>

          {/* Emergency Notice */}
          <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-600 text-xl">🚨</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Emergency Pet Situations
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    If you find an injured pet or encounter a dangerous animal situation, 
                    please contact Animal Control immediately at (555) 911-PETS or call 911 
                    for emergencies involving human safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Lost & Found Pets */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Lost & Found Reports</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {lostFoundPets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pet.type === 'Lost' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {pet.type === 'Lost' ? '🔍 LOST' : '🏠 FOUND'}
                      </span>
                      <span className="text-sm text-gray-500">
                        Reported: {new Date(pet.dateReported).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-3xl">
                            {pet.petType === 'Cat' ? '🐱' : '🐶'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {pet.name !== 'Unknown' ? pet.name : `${pet.breed} ${pet.petType}`}
                        </h3>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Type:</strong> {pet.petType} - {pet.breed}</p>
                          <p><strong>Color:</strong> {pet.color}</p>
                          <p><strong>Size:</strong> {pet.size}</p>
                          <p><strong>Location:</strong> {pet.location}</p>
                          <p><strong>Date:</strong> {new Date(pet.lastSeen).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {pet.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Contact:</p>
                          <p className="text-sm text-indigo-600 hover:text-indigo-500">
                            <a href={`tel:${pet.contact.split(' - ')[1]}`}>
                              {pet.contact}
                            </a>
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
                            Share
                          </button>
                          <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
                            Print
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for Finding Lost Pets */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Finding Lost Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">If You&apos;ve Lost a Pet</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Search immediately in a 3-block radius</li>
                  <li>• Call their name and shake treats/toys</li>
                  <li>• Check garages, sheds, and under porches</li>
                  <li>• Post on community social media groups</li>
                  <li>• Contact local shelters and veterinarians</li>
                  <li>• Put out familiar-smelling items (blankets, litter box)</li>
                  <li>• Search during quiet times (early morning, late evening)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">If You&apos;ve Found a Pet</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Check for ID tags, collars, or microchips</li>
                  <li>• Take photos and post on community boards</li>
                  <li>• Contact local animal shelters</li>
                  <li>• Provide temporary shelter if safe to do so</li>
                  <li>• Check with neighbors in the area</li>
                  <li>• Post on social media with location found</li>
                  <li>• Contact Oakwood management office</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Prevention is Key</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏷️ Proper ID</h3>
                <p className="text-gray-600">
                  Ensure pets always wear collars with current contact information and consider microchipping.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Secure Spaces</h3>
                <p className="text-gray-600">
                  Check fences regularly for holes or gaps. Keep cats indoors or in secure outdoor enclosures.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Stay Connected</h3>
                <p className="text-gray-600">
                  Join community social media groups and keep emergency contact numbers handy.
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