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
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600 mb-8">Our work is led by a dedicated team of passionate professionals and supported by an experienced Board of Directors and a diverse Advisory Council. Together, we are committed to our mission. <a href="#" className="text-fuchsia-600 hover:underline">Read detailed biographies here.</a></p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <img src="https://placehold.co/80x80" alt="Team member photo" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Alex Chen</h3>
                  <p className="text-sm text-gray-600">Director of Operations</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <img src="https://placehold.co/80x80" alt="Team member photo" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Maria Garcia</h3>
                  <p className="text-sm text-gray-600">Community Engagement Lead</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <img src="https://placehold.co/80x80" alt="Team member photo" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Jamal Williams</h3>
                  <p className="text-sm text-gray-600">Advocacy Coordinator</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <img src="https://placehold.co/80x80" alt="Team member photo" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">Sarah Lévesque</h3>
                  <p className="text-sm text-gray-600">Board Chair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
