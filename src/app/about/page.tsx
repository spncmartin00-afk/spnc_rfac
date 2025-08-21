import Layout from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-purple-100">
              Connecting 2SLGBTQI+ older people and the organizations that serve them across Canada
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to bring together, advocate for, and represent the interests of older 2SLGBTQI+ people across Canada, fostering unity among organizations and individuals dedicated to supporting communities of older 2SLGBTQI+ people.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                A society where the lives and identities of older 2SLGBTQI+ people are respected, affirmed and celebrated, our voices amplified and heard, where we live with pride, are embraced and empowered, free from fear and discrimination, with a sense of belonging and inclusion.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2">Our Story</h3>
              <p className="text-gray-600 mb-4">Learn about our journey from inception to becoming a national organization.</p>
              <a href="/about/our-story" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Read Our Story →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Mission, Vision & Values</h3>
              <p className="text-gray-600 mb-4">Discover our core principles and what drives our work.</p>
              <a href="/about/mission-vision-values" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Learn More →</a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-gray-600 mb-4">Meet the dedicated people behind our organization.</p>
              <a href="/about/our-team" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Meet The Team →</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}