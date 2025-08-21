import Layout from '@/components/layout/Layout';
import ContactSection from '@/components/sections/ContactSection';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-purple-100">
              Get in touch with our team. We're here to help and answer any questions you may have.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <ContactSection isActive={true} />
        </div>
      </div>
    </Layout>
  );
}