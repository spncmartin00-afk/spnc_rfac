import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { GraduationCap, FileCheck } from 'lucide-react';

export default function Training() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Training</h1>
            <p className="text-xl text-purple-100">
              We provide comprehensive services to help you create more inclusive and affirming spaces for older 2SLGBTQI+ people.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="mb-4 flex justify-center">
                <GraduationCap className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Training & Workshops</h3>
              <p className="text-gray-600 mb-6">Interactive workshops and training sessions designed to build competency and create affirming environments for 2SLGBTQI+ seniors.</p>
              <Link 
                href="/training/workshops" 
                className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="mb-4 flex justify-center">
                <FileCheck className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consulting & Policy Review</h3>
              <p className="text-gray-600 mb-6">Professional consulting services to help organizations develop inclusive policies and practices for serving 2SLGBTQI+ seniors.</p>
              <Link 
                href="/training/consulting" 
                className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}