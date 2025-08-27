import Layout from '@/components/layout/Layout';

export default function Policies() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Policies</h1>
            <p className="text-xl text-purple-100">
              Our commitments to privacy, accessibility, and community
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              We are committed to protecting your privacy and personal information. Our privacy policy outlines how we collect, use, and safeguard your data.
            </p>
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-2">Information We Collect</h3>
              <p className="mb-4">We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us.</p>
              
              <h3 className="text-lg font-medium mb-2">How We Use Your Information</h3>
              <p className="mb-4">We use the information we collect to provide, maintain, and improve our services and communicate with you.</p>
              
              <h3 className="text-lg font-medium mb-2">Information Sharing</h3>
              <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800">Read Full Privacy Policy</button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              By using our website and services, you agree to comply with and be bound by our terms of use.
            </p>
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-2">Acceptable Use</h3>
              <p className="mb-4">You may use our services only for lawful purposes and in accordance with these terms.</p>
              
              <h3 className="text-lg font-medium mb-2">User Content</h3>
              <p className="mb-4">You retain ownership of any content you submit, but grant us a license to use it in connection with our services.</p>
              
              <h3 className="text-lg font-medium mb-2">Prohibited Activities</h3>
              <p className="mb-4">You may not use our services to harass, abuse, or harm others, or to violate any laws or regulations.</p>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800">Read Full Terms of Use</button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Accessibility Statement</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              We are committed to ensuring digital accessibility for people with disabilities and continually improving the user experience for everyone.
            </p>
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-2">Our Commitment</h3>
              <p className="mb-4">We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.</p>
              
              <h3 className="text-lg font-medium mb-2">Accessibility Features</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>High contrast color schemes</li>
                <li>Resizable text and images</li>
                <li>Alternative text for images</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2">Feedback</h3>
              <p className="mb-4">If you encounter any accessibility barriers, please contact us so we can improve.</p>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800">Contact Accessibility Team</button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Land Acknowledgement</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4 italic">
                We acknowledge that we are gathered on the traditional territories of the Blackfoot Confederacy (Siksika, Kainai, Piikani), the Tsuut'ina, the Îyâxe Nakoda Nations, the Métis Nation (Region 3), and all people who make their homes in the Treaty 7 region of Southern Alberta.
              </p>
              <p className="text-gray-600 mb-4">
                As an organization serving LGBTQ2S+ seniors, we recognize the ongoing impacts of colonization on Indigenous communities and the unique challenges faced by Indigenous LGBTQ2S+ elders.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to reconciliation and building meaningful relationships with Indigenous communities while advocating for the rights and dignity of all seniors, including Indigenous LGBTQ2S+ elders.
              </p>
              <p className="text-gray-600">
                We encourage learning about the Indigenous history of the land where you live and work, and supporting Indigenous-led organizations and initiatives.
              </p>
            </div>
            <div className="mt-4">
              <button className="text-blue-600 hover:text-blue-800 mr-4">Learn More About Treaty 7</button>
              <button className="text-blue-600 hover:text-blue-800">Indigenous Resources</button>
            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </Layout>
  )
}