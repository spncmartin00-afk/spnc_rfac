import Layout from '@/components/layout/Layout';
import ContactSection from '@/components/sections/ContactSection';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <ContactSection isActive={true} />
      </div>
    </Layout>
  );
}