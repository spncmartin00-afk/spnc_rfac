import Layout from '@/components/layout/Layout';

export default function AccessibilityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl text-purple-100">
              Committed to making our website accessible to everyone
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                SPNC/RFAC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-6">
                We believe that websites and digital content should be accessible to all users, regardless of their abilities or the assistive technologies they use. Our goal is to provide an inclusive experience for everyone who visits our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Accessibility Features</h2>
              <p className="text-gray-700 mb-6">
                Our website includes several accessibility features: keyboard navigation support, screen reader compatibility, high contrast options, resizable text, and alternative text for images. We strive to meet WCAG 2.1 AA standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Improvements</h2>
              <p className="text-gray-700 mb-6">
                We are continuously working to improve the accessibility of our website. This includes regular testing with assistive technologies, user feedback integration, and staying updated with accessibility best practices and standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Feedback and Support</h2>
              <p className="text-gray-700 mb-6">
                We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please let us know. Your input helps us create a better experience for all users.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                For accessibility-related questions or concerns, please contact us at{' '}
                <a 
                  href="mailto:info@spnc-rfac.ca" 
                  className="text-fuchsia-600 hover:underline font-semibold"
                >
                  info@spnc-rfac.ca
                </a>
                . We will respond to accessibility feedback within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
