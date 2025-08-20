import Layout from '@/components/layout/Layout';
import DonateSection from '@/components/sections/DonateSection';

export default function Donate() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <DonateSection isActive={true} />
      </div>
    </Layout>
  );
}