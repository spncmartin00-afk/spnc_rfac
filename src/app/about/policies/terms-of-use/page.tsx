import Layout from '@/components/layout/Layout';

export default function TermsOfUse() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl text-purple-100">
              Terms and conditions for using our website and services
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024
              </p>

              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on Senior Pride Network Canada's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>

              <h2 className="text-2xl font-bold mb-4">3. Acceptable Use</h2>
              <p className="mb-4">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Distribute spam or malicious content</li>
                <li>Infringe on intellectual property rights</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. User Content</h2>
              <p className="mb-4">
                You retain ownership of any content you submit to our website. However, by submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and distribute your content in connection with our services.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Privacy Policy</h2>
              <p className="mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall Senior Pride Network Canada or its suppliers be liable for any damages arising out of the use or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="mb-6">
                We may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to us at:
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Email:</strong> info@spnc-rfac.ca</p>
                <p><strong>Address:</strong> SPNC/RFAC, 10-30 Cleary Ave, Ottawa, ON, K2A 4A1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}