import Layout from '@/components/layout/Layout';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Training() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <ServicesSection isActive={true} />
      </div>
    </Layout>
  );
}