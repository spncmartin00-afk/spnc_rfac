import Layout from '@/components/layout/Layout';
import AboutSection from '@/components/sections/AboutSection';

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <AboutSection isActive={true} />
      </div>
    </Layout>
  );
}