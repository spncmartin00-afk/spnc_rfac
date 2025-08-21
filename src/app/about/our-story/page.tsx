import Layout from '@/components/layout/Layout';

export default function OurStoryPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-4">
            <h2 className="text-3xl font-bold mb-2">Our Story</h2>
            <p className="text-gray-700">
              Before our national organization came to be, there was no single voice representing older 2SLGBTQI+ individuals nationally in Canada. This left a significant gap, resulting in a need for more policies, resources, training, programs, and services addressing the unique needs and limited recognition of older 2SLGBTQI+ people. To bridge this gap, several organizations from across the country joined forces in August 2022, aiming to create a national entity dedicated to supporting queer seniors.
            </p>
            <p className="text-gray-700">
              Key organizations like Dignity Seniors Society in British Columbia, Rainbow Resource Centre in Manitoba, and Senior Pride Network Toronto in Ontario initiated the conversation. As more groups from various provinces joined, the importance of establishing a national organization became increasingly evident.
            </p>
            <p className="text-gray-700">
              Together, we outlined several priorities for our collaboration, including combating discrimination, reducing social isolation, promoting visibility, empowering self-advocacy, creating tailored resources, driving policy change, and fostering the creation of safer and inclusive spaces where queer seniors belong and are affirmed.
            </p>
            <p className="text-gray-700">
              With a united vision, we decided to incorporate as a national not-for-profit organization. On October 16, 2023, Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC) officially became a national not-for-profit corporation operating from Ottawa, Ontario.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
