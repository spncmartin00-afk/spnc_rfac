import Layout from '@/components/layout/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-purple-100">
              Your privacy and confidentiality matter to us
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4"><strong>Effective Date: June 26, 2025</strong></p>
              
              <p className="text-gray-700 mb-6">
                At Inclusify by All Welcome Consulting (<a href="https://inclusify.allwelcome.ca/" className="text-fuchsia-600 hover:underline">https://inclusify.allwelcome.ca/</a> and <a href="https://allwelcome.ca/" className="text-fuchsia-600 hover:underline">https://allwelcome.ca/</a>), your privacy is a top priority for us. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your information. Inclusify by All Welcome Consulting is a consulting business based in Ontario, Canada.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We collect very limited personal information on our website, and only when you choose to provide it:</p>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li><strong>Contact Information:</strong> If you use our contact form, sign up for our newsletter, download any resources, or email us, we may collect your name, email address, and any information you include in your message.</li>
                <li><strong>Usage Data:</strong> Like most websites, we use cookies and analytics tools (such as Google Analytics) to collect anonymized data about how visitors use our website. This may include IP address, browser type, time spent on pages, and pages visited. This data does <strong>not</strong> identify you personally.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li>To respond to your inquiries or requests.</li>
                <li>To send newsletters or updates if you have subscribed (you may unsubscribe at any time).</li>
                <li>To improve our website and understand how visitors use it.</li>
                <li>To comply with any legal obligations.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-700 mb-4">
                We do <strong>not</strong> sell or rent your personal information. We may share information with trusted service providers (such as email newsletter services or website analytics providers) who help us operate our business, but only as necessary and in compliance with this policy.
              </p>
              <p className="text-gray-700 mb-6">
                We may disclose information if required by law or to protect our rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies and Analytics</h2>
              <p className="text-gray-700 mb-6">
                We use cookies to enhance your browsing experience and collect anonymous usage statistics. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website for you.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We take reasonable steps to protect your information. However, no online system is perfectly secure, so please use caution when sharing information online.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Choices</h2>
              <ul className="text-gray-700 mb-6 list-disc pl-6">
                <li><strong>Unsubscribe:</strong> If you receive emails or newsletters from us, you can unsubscribe at any time using the link provided in the message or by contacting us at <a href="mailto:hello@allwelcome.ca" className="text-fuchsia-600 hover:underline">hello@allwelcome.ca</a>.</li>
                <li><strong>Access or Deletion:</strong> If you have provided us with personal information and would like to access or delete it, please contact us at <a href="mailto:hello@allwelcome.ca" className="text-fuchsia-600 hover:underline">hello@allwelcome.ca</a>. Please note: If you have not provided us with any personal information, we have nothing to provide or delete.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. External Links</h2>
              <p className="text-gray-700 mb-6">
                Our website may contain links to third-party sites (such as LinkedIn). We are not responsible for the privacy practices or content of these sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or your information, please contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> <a href="mailto:hello@allwelcome.ca" className="text-fuchsia-600 hover:underline">hello@allwelcome.ca</a><br/>
                <strong>Phone:</strong> 416-527-6207
              </p>
              <p className="text-gray-700 mb-6">
                If you are not satisfied with our response, you may contact the Information and Privacy Commissioner of Ontario:
              </p>
              <p className="text-gray-700 mb-6">
                Information and Privacy Commissioner of Ontario<br/>
                2 Bloor Street East, Suite 1400<br/>
                Toronto, ON, M4W 1A8<br/>
                416-326-3333
              </p>

              <hr className="my-8"/>
              <p className="text-gray-600 italic text-sm">
                This policy may be updated from time to time. Please review it periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}