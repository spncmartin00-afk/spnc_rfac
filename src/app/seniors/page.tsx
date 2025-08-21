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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5 icon-gradient" />
                  Housing & Living
                </h3>
                <p className="text-gray-600 mb-4">Find 2SLGBTQI+ friendly housing options and know your rights.</p>
                <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Explore Resources &rarr;</a>
              </div>
              <div className="card bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 icon-gradient" />
                  Health & Wellness
                </h3>
                <p className="text-gray-600 mb-4">Access health resources and find inclusive healthcare providers.</p>
                <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Find Support &rarr;</a>
              </div>
              <div className="card bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <HandHeart className="w-5 h-5 icon-gradient" />
                  Community & Social
                </h3>
                <p className="text-gray-600 mb-4">Connect with others and find social activities in your area.</p>
                <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Get Connected &rarr;</a>
              </div>
              <div className="card bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 icon-gradient" />
                  Legal & Rights
                </h3>
                <p className="text-gray-600 mb-4">Understand your rights and access legal support when needed.</p>
                <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Know Your Rights &rarr;</a>
              </div>
              <div className="card bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 icon-gradient" />
                  Learning & Growth
                </h3>
                <p className="text-gray-600 mb-4">Explore educational opportunities and skill-building programs.</p>
                <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Learn More &rarr;</a>
              </div>
              <div className="card bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 icon-gradient" />
                  Crisis Support
                </h3>
                <p className="text-gray-600 mb-4">Access immediate support and crisis resources when you need them most.</p>
                <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Get Help Now &rarr;</a>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Featured Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Housing Rights in Canada</h3>
                    <p className="text-gray-700">A comprehensive guide to your housing rights as a 2SLGBTQI+ senior.</p>
                  </div>
                  <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700">Download</button>
                </div>
                <div className="bg-green-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Finding 2SLGBTQI+ Affirming Healthcare</h3>
                    <p className="text-gray-700">Tips and resources for finding healthcare providers who understand your needs.</p>
                  </div>
                  <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700">Download</button>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Community Connection Guide</h3>
                    <p className="text-gray-700">How to find and connect with 2SLGBTQI+ communities and support groups.</p>
                  </div>
                  <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700">Download</button>
                </div>
                <div className="bg-purple-100 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Navigating Family Relationships</h3>
                    <p className="text-gray-700">Resources for maintaining healthy relationships with family and chosen family.</p>
                  </div>
                  <button className="bg-purple-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-purple-700">Download</button>
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
                  <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
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