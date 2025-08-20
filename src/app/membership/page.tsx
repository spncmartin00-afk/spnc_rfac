import Layout from '@/components/layout/Layout';
import MembershipSection from '@/components/sections/MembershipSection';

export default function Membership() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <MembershipSection isActive={true} />
      </div>
    </Layout>
  );
}