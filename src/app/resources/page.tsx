import Layout from '@/components/layout/Layout';
import ResourcesSection from '@/components/sections/ResourcesSection';

export default function Resources() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <ResourcesSection isActive={true} />
      </div>
    </Layout>
  );
}