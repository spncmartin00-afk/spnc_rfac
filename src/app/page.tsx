import Layout from '@/components/layout/Layout';
import HomeSection from '@/components/sections/HomeSection';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto  py-6">
        <HomeSection isActive={true} />
      </div>
    </Layout>
  );
}
