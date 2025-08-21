import Layout from '@/components/layout/Layout';

export default function WorkshopsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Training & Workshops</h1>
            <p className="text-xl text-purple-100">
              We offer a range of workshops and on-demand training to help your organization and staff become more affirming and knowledgeable. Our sessions are co-created with queer elders to ensure a community-centered approach.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Training & Workshops</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <span className="text-sm font-bold text-fuchsia-600 bg-fuchsia-100 py-1 px-2 rounded">Workshop</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Intro to 2SLGBTQI+ Competency</h3>
                <p className="text-gray-600 mb-4">This foundational session covers key terminology, historical context, and best practices for creating safe and welcoming spaces. Perfect for all staff and volunteers.</p>
                <button className="bg-fuchsia-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-fuchsia-700">Book a Session</button>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-2 rounded">E-Learning</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Advanced Policy & Inclusion</h3>
                <p className="text-gray-600 mb-4">A self-paced, online module designed for managers and policy-makers, focusing on embedding inclusive language and practices into organizational policy.</p>
                <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700">Explore Module</button>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <span className="text-sm font-bold text-green-600 bg-green-100 py-1 px-2 rounded">Webinar Series</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Queer Seniors 101 for Healthcare</h3>
                <p className="text-gray-600 mb-4">A three-part series tailored for healthcare professionals, covering topics from historical trauma to affirming communication and specialized care needs.</p>
                <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700">Contact for Details</button>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-2">Looking for something specific?</h3>
              <p className="text-gray-600 mb-4">We offer custom training tailored to your organization's unique needs. Get in touch to learn more.</p>
              <button className="bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">Request Custom Training</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}