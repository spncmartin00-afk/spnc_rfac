import Layout from '@/components/layout/Layout';
import DonateSection from '@/components/sections/DonateSection';

export default function Donate() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Donate</h1>
            <p className="text-xl text-purple-100">
              Support our mission to serve and empower LGBTQ+ seniors in our community.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <DonateSection isActive={true} />
        </div>
      </div>
    </Layout>
  );
}