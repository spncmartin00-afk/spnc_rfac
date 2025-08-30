import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OurTeamPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/about" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Our Board of Directors</h2>
            <p className="text-gray-600 mb-8">Our governance is led by a dedicated Board of Directors comprised of community leaders, advocates, and professionals committed to advancing the rights and wellbeing of 2SLGBTQI+ seniors across Canada.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center bg-gradient-to-r from-fuchsia-50 to-purple-50 p-4 rounded-lg border border-fuchsia-200">
                <img src="/team-members/victoria.avif" alt="Victoria photo" className="w-20 h-20 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold text-lg">Victoria</h3>
                  <p className="text-sm text-fuchsia-600 font-semibold">Co-Chair</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-fuchsia-50 to-purple-50 p-4 rounded-lg border border-fuchsia-200">
                <img src="/team-members/cheryl.avif" alt="Cheryl photo" className="w-20 h-20 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold text-lg">Cheryl</h3>
                  <p className="text-sm text-fuchsia-600 font-semibold">Co-Chair</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                <img src="/team-members/carmen.avif" alt="Carmen photo" className="w-20 h-20 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold text-lg">Carmen</h3>
                  <p className="text-sm text-blue-600 font-semibold">Secretary</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-200">
                <img src="/team-members/daniel.avif" alt="Daniel photo" className="w-20 h-20 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold text-lg">Daniel</h3>
                  <p className="text-sm text-emerald-600 font-semibold">Treasurer</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-lg border border-gray-200">
                <img src="/team-members/tom.avif" alt="Tom photo" className="w-20 h-20 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold text-lg">Tom</h3>
                  <p className="text-sm text-gray-600 font-semibold">Board Member</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-lg border border-gray-200">
                <img src="https://placehold.co/80x80/6B7280/FFFFFF?text=A" alt="Ada photo" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Ada</h3>
                  <p className="text-sm text-gray-600 font-semibold">Board Member</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Board Governance</h3>
              <p className="text-gray-600 mb-4">
                Our Board of Directors provides strategic oversight, ensures organizational accountability, and guides our mission to support 2SLGBTQI+ seniors across Canada. Each member brings unique expertise and lived experience to advance our work.
              </p>
              <p className="text-sm text-gray-500">
                For detailed biographies and board meeting information, please contact us at <a href="mailto:info@spnc-rfac.ca" className="text-fuchsia-600 hover:underline">info@spnc-rfac.ca</a>.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6">Our Committees</h2>
            <p className="text-gray-600 mb-8">Our work is guided by dedicated committees that focus on specific aspects of our mission to support 2SLGBTQI+ seniors.</p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Governance and Finance Committee</h3>
                <p className="text-gray-600">
                  Responsible for organizational governance, financial oversight, and strategic planning to ensure effective management of resources and adherence to our mission.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">Engagement Committee</h3>
                <p className="text-gray-600">
                  Focuses on community outreach, member engagement, and building partnerships to expand our reach and impact within the 2SLGBTQI+ senior community.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">PARE Committee</h3>
                <p className="text-gray-600">
                  Dedicated to Policy, Advocacy, Research, and Education initiatives that advance the rights and wellbeing of 2SLGBTQI+ seniors through evidence-based approaches.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6">Our Staff and Volunteers</h2>
            <p className="text-gray-600 mb-8">Our dedicated team works tirelessly to support our community and advance our mission.</p>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-orange-800">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Martin</h3>
                  <p className="text-orange-600 font-medium">Coordinator</p>
                  <p className="text-gray-600 mt-1">Leading our day-to-day operations and coordinating programs to serve the 2SLGBTQI+ senior community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
