import Layout from '@/components/layout/Layout';

export default function ConsultingPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Consulting & Policy Review</h1>
            <p className="text-xl text-purple-100">
              Move beyond training to create lasting change with our consulting services. We provide expert guidance to audit your policies, assess your organizational culture, and build a strategic roadmap for inclusion.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="bg-white rounded-2xl p-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Policy & Program Review</h3>
                <p className="text-gray-600 mb-4">Our team will conduct a thorough review of your existing policies, procedures, and programs to identify gaps and provide concrete recommendations for creating more inclusive and equitable outcomes for 2SLGBTQI+ seniors.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Review of intake forms and procedures.</li>
                  <li>Analysis of language in communications and policies.</li>
                  <li>Recommendations for program adjustments.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Organizational Assessment</h3>
                <p className="text-gray-600 mb-4">We'll help you understand your starting point. This service includes a comprehensive assessment of your organization's readiness for change, focusing on cultural climate, staff knowledge, and leadership commitment.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Confidential staff and stakeholder interviews.</li>
                  <li>Reporting on key strengths and areas for improvement.</li>
                  <li>Development of a strategic implementation plan.</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-center">Ready to get started?</h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6 text-center">Fill out the form below to tell us about your needs, and a member of our team will be in touch shortly.</p>
              <form className="max-w-xl mx-auto">
                <div className="mb-4">
                  <label htmlFor="consulting-name" className="block font-bold mb-2">Your Name</label>
                  <input type="text" id="consulting-name" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="consulting-org" className="block font-bold mb-2">Organization</label>
                  <input type="text" id="consulting-org" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="consulting-email" className="block font-bold mb-2">Email Address</label>
                  <input type="email" id="consulting-email" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="consulting-message" className="block font-bold mb-2">Your Needs</label>
                  <textarea id="consulting-message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 text-lg">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}