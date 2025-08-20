'use client';

interface DonateSectionProps {
  isActive: boolean;
}

export default function DonateSection({ isActive }: DonateSectionProps) {
  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Support Our Work</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your donation helps us continue our vital work supporting 2SLGBTQI+ older adults across Canada.
        </p>
      </div>
      
      <div className="mt-12 bg-white p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Make a Difference</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Your Impact</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-fuchsia-600 mr-2">•</span>
                Fund training programs for service providers
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-600 mr-2">•</span>
                Support advocacy initiatives for policy change
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-600 mr-2">•</span>
                Create resources for 2SLGBTQI+ older adults
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-600 mr-2">•</span>
                Build networks across Canada
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Donation Options</h3>
            <div className="space-y-3">
              <button className="w-full bg-fuchsia-600 text-white p-3 rounded-lg hover:bg-fuchsia-700">
                One-time Donation
              </button>
              <button className="w-full border-2 border-fuchsia-600 text-fuchsia-600 p-3 rounded-lg hover:bg-fuchsia-50">
                Monthly Giving
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Tax receipts are provided for all donations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}