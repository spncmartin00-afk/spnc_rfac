import Layout from '@/components/layout/Layout';
import { Rainbow, Home, Heart, HandHeart, Scale, DollarSign, Lightbulb, GraduationCap, Phone } from 'lucide-react';

export default function SeniorsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Rainbow className="w-16 h-16 icon-gradient" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                For 2SLGBTQI+ Seniors
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Welcome! This space is designed specifically for you. Find resources, connect with others, and access support to help you live authentically and with dignity.
              </p>
            </div>



            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Featured Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Housing Rights in Canada</h3>
                    <p className="text-gray-700">A comprehensive guide to your housing rights as a 2SLGBTQI+ senior.</p>
                  </div>
                  <a href="/guide-to-affirming-senior-care.pdf" download className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700 inline-block">Download</a>
                </div>
                <div className="bg-green-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Finding 2SLGBTQI+ Affirming Healthcare</h3>
                    <p className="text-gray-700">Tips and resources for finding healthcare providers who understand your needs.</p>
                  </div>
                  <a href="/guide-to-affirming-senior-care.pdf" download className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700 inline-block">Download</a>

                </div>
                <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Legal Planning for Queer Seniors</h3>
                    <p className="text-gray-700">Guidance on legal planning, wills, and protecting your rights as a queer senior.</p>
                  </div>
                  <a href="/guide-to-affirming-senior-care.pdf" download className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 inline-block">Download</a>
                </div>
                <div className="bg-purple-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Pensions & Financial Planning</h3>
                    <p className="text-gray-700">Guidance on pensions, retirement income, and financial planning for 2SLGBTQI+ seniors.</p>
                  </div>
                  <a href="/guide-to-affirming-senior-care.pdf" download className="bg-purple-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-purple-700 inline-block">Download</a>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect With Your Community</h2>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                  You&apos;re not alone in your journey. Connect with other 2SLGBTQI+ seniors across Canada through our community programs, support groups, and social events.
                </p>
                <div className="space-x-4">
                  <a href="/resources/community-map" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                    Find Local Groups
                  </a>
                  <a href="#" className="inline-block border-2 border-fuchsia-600 text-fuchsia-600 font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-600 hover:text-white">
                    Join Online Community
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