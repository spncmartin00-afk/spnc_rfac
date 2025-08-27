import Layout from '@/components/layout/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-purple-100">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Welcome to SPNC/RFAC. By accessing and using our website and services, you agree to be bound by these Terms of Service. These terms govern your use of our website, content, and services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Use of Services</h2>
              <p className="text-gray-700 mb-6">
                Our services are provided for informational and educational purposes related to 2SLGBTQI+ senior care and advocacy. You may use our website and services for lawful purposes only and in accordance with these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content on this website, including text, graphics, logos, images, and software, is the property of SPNC/RFAC or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                SPNC/RFAC provides information and resources for educational purposes. We make no warranties about the accuracy, completeness, or usefulness of any information on our website. We are not liable for any damages arising from your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a 
                  href="mailto:info@spnc-rfac.ca" 
                  className="text-fuchsia-600 hover:underline font-semibold"
                >
                  info@spnc-rfac.ca
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
