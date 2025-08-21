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
              <p className="text-gray-700 mb-6">
                Protecting the privacy and confidentiality of your personal information is vital to SPNC/RFAC. We are committed to collecting, using and disclosing personal information responsibly and only to the extent necessary for our projects.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Website Usage Information</h2>
              <p className="text-gray-700 mb-6">
                We collect aggregate, anonymous information about how visitors use our website, spnc-rfac.ca, to improve its content and functionality. This includes data on the pages accessed and the time spent on the website. This aggregate information is used only for internal purposes and is not shared with third parties.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h2>
              <p className="text-gray-700 mb-6">
                SPNC/RFAC respects your privacy. We will only collect personal information, such as your name and contact details, if you provide it to us voluntarily, for example, by signing up for our mailing list. This information informs you about our programs, services, and upcoming events and will never be sold or shared with any other organizations.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns about the privacy of your information, please contact us at{' '}
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