import Layout from '@/components/layout/Layout';
import { BookOpen, FileText, Target, Users, MessageSquare, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-purple-100">
              Learn more about our mission, our team, and our commitment to the communities we serve.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <BookOpen className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Story</h3>
              <p className="text-gray-600 mb-4">Learn about our journey from inception to becoming a national organization.</p>
              <a href="/about/our-story" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Read Our Story →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <FileText className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mandate</h3>
              <p className="text-gray-600 mb-4">Understand our organizational mandate and core responsibilities.</p>
              <a href="/about/our-mandate" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">View Mandate →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <Target className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mission, Vision & Values</h3>
              <p className="text-gray-600 mb-4">Discover our core principles and what drives our work.</p>
              <a href="/about/mission-vision-values" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Learn More →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <Users className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-gray-600 mb-4">Meet the dedicated people behind our organization.</p>
              <a href="/about/our-team" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Meet The Team →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <MessageSquare className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-2">Communications</h3>
              <p className="text-gray-600 mb-4">Access our strategic plan, reports, and newsletters.</p>
              <a href="/about/communications" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">View Communications →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <Shield className="w-12 h-12 icon-gradient" />
              </div>
              <h3 className="text-xl font-bold mb-2">Policies</h3>
              <p className="text-gray-600 mb-4">Our privacy policy, terms of use, and accessibility commitments.</p>
              <a href="/about/policies" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">View Policies →</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}