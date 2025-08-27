import Layout from '@/components/layout/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-purple-100">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024
              </p>

              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Create an account or register for our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our website or email</li>
                <li>Participate in surveys or events</li>
                <li>Make donations or payments</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you newsletters and updates about our programs</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process donations and transactions</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and property</li>
                <li>With trusted service providers who assist us in operating our website</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Email:</strong> privacy@spnc-rfac.ca</p>
                <p><strong>Address:</strong> SPNC/RFAC, 10-30 Cleary Ave, Ottawa, ON, K2A 4A1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}