import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CollaborationPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/resources/allied" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Allied Resources
          </Link>
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <FontAwesomeIcon icon={faHandshakeAngle} className="text-6xl text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Collaboration Opportunities for Allied Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                We invite allied organizations to collaborate with SPNC/RFAC and our frontline members on various initiatives. Partnership is key to expanding our collective impact and improving the lives of 2SLGBTQI+ seniors across Canada.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Partnership Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Joint Program Development</h3>
                  <p className="text-gray-700 mb-4">Collaborate with SPNC/RFAC to develop and implement new programs or services specifically targeting the unique needs of 2SLGBTQI+ seniors in your community.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Propose a Partnership &rarr;
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Co-host Events & Webinars</h3>
                  <p className="text-gray-700 mb-4">Partner with us to organize and promote educational events, workshops, and webinars relevant to 2SLGBTQI+ aging and inclusive care practices.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Suggest an Event &rarr;
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Collaborate?</h2>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                  Our partnership team is ready to work with you to identify collaboration opportunities that align with your organization&apos;s goals and capacity while maximizing impact for 2SLGBTQI+ seniors.
                </p>
                <div className="space-x-4">
                  <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
                    Schedule Partnership Meeting
                  </a>
                  <a href="#" className="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white">
                    Download Partnership Guide
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}