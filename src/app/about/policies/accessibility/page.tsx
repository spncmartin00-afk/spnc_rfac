import Layout from '@/components/layout/Layout';

export default function AccessibilityStatement() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl text-purple-100">
              Our commitment to digital accessibility for all users
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <p className="mb-6">
                Senior Pride Network Canada is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
              </p>

              <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
              <p className="mb-4">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="mb-6">
                This website strives to conform to WCAG 2.1 Level AA standards. We aim to meet these guidelines to ensure our content is accessible to all users, including those using assistive technologies.
              </p>

              <h2 className="text-2xl font-bold mb-4">Measures to Support Accessibility</h2>
              <p className="mb-4">We take the following measures to ensure accessibility:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Include accessibility as part of our mission statement</li>
                <li>Include accessibility throughout our internal policies</li>
                <li>Integrate accessibility into our procurement practices</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Assign clear accessibility targets and responsibilities</li>
                <li>Employ formal accessibility quality assurance methods</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <p className="mb-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>High contrast color schemes</li>
                <li>Resizable text without loss of functionality</li>
                <li>Alternative text for images</li>
                <li>Clear headings and labels</li>
                <li>Consistent navigation throughout the site</li>
                <li>Focus indicators for keyboard users</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Feedback and Contact Information</h2>
              <p className="mb-4">
                We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
              </p>
              <div className="bg-gray-50 p-4 rounded mb-6">
                <p><strong>Email:</strong> accessibility@spnc-rfac.ca</p>
                <p><strong>Phone:</strong> Available upon request</p>
                <p><strong>Address:</strong> SPNC/RFAC, 10-30 Cleary Ave, Ottawa, ON, K2A 4A1</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <p className="mb-4">
                Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Assessment Approach</h2>
              <p className="mb-4">
                Senior Pride Network Canada assessed the accessibility of this website by the following approaches:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Self-evaluation</li>
                <li>External evaluation by accessibility consultants</li>
                <li>User testing with people with disabilities</li>
              </ul>

              <p className="text-sm text-gray-600 mt-8">
                This statement was created on January 1, 2024, and was last reviewed on January 1, 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}