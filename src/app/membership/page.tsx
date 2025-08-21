import Layout from '@/components/layout/Layout';
import MembershipSection from '@/components/sections/MembershipSection';

export default function Membership() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Membership</h1>
            <p className="text-xl text-purple-100">
            Become part of the SPNC/RFAC community and help us create a stronger, more inclusive Canada for queer seniors.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <MembershipSection isActive={true} />
        </div>
      </div>
    </Layout>
  );
}