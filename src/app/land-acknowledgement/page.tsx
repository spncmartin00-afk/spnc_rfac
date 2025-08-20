import Layout from '@/components/layout/Layout';
import LandAcknowledgementSection from '@/components/sections/LandAcknowledgementSection';

export default function LandAcknowledgement() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <LandAcknowledgementSection isActive={true} />
      </div>
    </Layout>
  );
}