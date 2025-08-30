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
                <strong>Effective Date:</strong> June 26, 2025
              </p>

              <p className="mb-6">
                Welcome to the website of Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC) (<a href="https://spnc-rfac.ca/" className="text-fuchsia-600 hover:underline">https://spnc-rfac.ca/</a>).
              </p>
              
              <p className="mb-6">
                By accessing or using our website, you agree to comply with and be bound by these Terms of Use. Please read them carefully.
              </p>
              
              <p className="mb-6">
                <strong>If you do not agree to these terms, please do not use our website.</strong>
              </p>

              <h2 className="text-2xl font-bold mb-4">1. About Us</h2>
              <p className="mb-6">
                Senior Pride Network Canada (SPNC/RFAC) is a federally incorporated, non-profit organization headquartered in Ottawa, Ontario. We unite, advocate for, and empower older 2SLGBTQI+ people across Canada.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Use of Our Website</h2>
              <p className="mb-4">
                You may use our website for lawful, non-commercial purposes related to our mission. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use our website for fraudulent or unlawful purposes</li>
                <li>Upload or transmit viruses, malware, or harmful code</li>
                <li>Interfere with or disrupt website functionality</li>
                <li>Infringe the rights of SPNC/RFAC or any third party</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p className="mb-4">
                Unless otherwise stated, all content on our website — including text, images, graphics, logos, videos, and downloadable materials — is owned by SPNC/RFAC or used with permission.
              </p>
              <p className="mb-4">
                <strong>You may:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>View, download, or print materials for your personal, non-commercial use</li>
                <li>Share our materials with proper credit and without modification</li>
              </ul>
              <p className="mb-4">
                <strong>You may not:</strong>
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Modify, reproduce, or distribute our content for commercial purposes without prior written permission from SPNC/RFAC</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. External Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites for your convenience. We are not responsible for the content, accuracy, or privacy practices of those sites. Following external links is at your own risk.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
              <p className="mb-6">
                The information on our website is provided for general information and awareness purposes only. While we make every effort to ensure accuracy, we do not guarantee that all information is complete, current, or error-free.
              </p>
              <p className="mb-6">
                SPNC/RFAC is not responsible for any damages or losses arising from your use of our website or reliance on its content.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Events, Resources, and Third-Party Content</h2>
              <p className="mb-6">
                Our website may promote events, resources, or content provided by third parties. Inclusion of this information does not imply endorsement by SPNC/RFAC. We are not responsible for the accuracy or safety of third-party offerings.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
              <p className="mb-6">
                Your use of our website is also governed by our Privacy Policy. By using our website, you consent to the collection, use, and disclosure of your personal information as described in that policy.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="mb-6">
                To the fullest extent permitted by Canadian law, SPNC/RFAC, its directors, employees, and volunteers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="mb-6">
                These Terms of Use are governed by the laws of the Province of Ontario and the applicable federal laws of Canada. Any disputes shall be resolved in the courts of Ontario.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Changes to These Terms</h2>
              <p className="mb-6">
                We may update these Terms of Use from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Effective Date."
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have questions about these Terms of Use, please contact:
              </p>
              <div className="mb-4">
                <strong>Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC)</strong><br/>
                10‑30 Cleary Ave.<br/>
                Ottawa, ON K2A 4A1<br/>
                <strong>Phone:</strong> 613‑915‑5678<br/>
                <strong>Email:</strong> <a href="mailto:info@spnc-rfac.ca" className="text-fuchsia-600 hover:underline">info@spnc-rfac.ca</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}