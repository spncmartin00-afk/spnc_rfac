import Layout from '@/components/layout/Layout';

export default function AccessibilityStatement() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Accessibility Policy</h1>
            <p className="text-xl text-purple-100">
              Our commitment to accessibility for all users
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> June 26, 2025
              </p>

              <p className="mb-6">
                At Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC), we will make every reasonable effort to meet the requirements of the Accessibility for Ontarians with Disabilities Act (AODA), 2005, including all applicable elements of the Integrated Accessibility Standards.
              </p>

              <h2 className="text-2xl font-bold mb-4">Information and Communication</h2>
              <p className="mb-6">
                SPNC/RFAC will make its information accessible to people with disabilities by creating materials and supports in accessible formats, and it will notify the public of the types of accessible formats provided. For a detailed description of each principle and format, please visit <a href="https://www.AccessOn.ca" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 hover:underline">www.AccessOn.ca</a>.
              </p>
              
              <p className="mb-6">
                SPNC/RFAC is committed to providing alt-text and image descriptions for all posts on social media platforms that feature visual media. SPNC/RFAC will also provide automated English captioning for video content produced by the organization.
              </p>

              <p className="mb-6">
                Furthermore, SPNC/RFAC will provide clients with alternate formats of information upon request. Suppose a particular material cannot be converted into an accessible format that meets the needs of the person requesting it. In that case, SPNC/RFAC will collaborate with the individual to provide a summary of the information or communication in another suitable way.
              </p>

              <h2 className="text-2xl font-bold mb-4">Canadian and Ontario Accessibility Standards and Regulations</h2>
              <p className="mb-6">
                Ontario's Integrated Accessibility Standards Regulation (IASR) aims to make Ontario more accessible to people with disabilities. The Accessibility for Ontarians with Disabilities Act (AODA), 2005, is the foundation on which the IASR is built. The AODA allows for the enforcement of the IASR through inspections, compliance orders, and administrative penalties.
              </p>

              <p className="mb-6">
                SPNC/RFAC's accessibility practices are compliant with the AODA, the IASR, the Canadian Charter of Rights and Freedoms, the Ontario Human Rights Code, and other applicable Canadian federal and provincial accessibility regulations.
              </p>

              <p className="mb-6">
                The SPNC/RFAC website complies with Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, as published by the W3C Consortium's Web Accessibility Initiative (WAI).
              </p>

              <h2 className="text-2xl font-bold mb-4">Public-Facing Services</h2>
              <p className="mb-4">
                SPNC/RFAC will provide customer service in a manner that removes barriers for people with disabilities according to the following key principles of the AODA:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Services will be provided in a manner that respects the dignity and independence of persons with disabilities.</li>
                <li>Service to people with disabilities will be integrated with others, unless the person with the disability requires an alternate way of providing the goods, services or facility.</li>
                <li>Persons with disabilities will be given equal opportunity to use and benefit from the goods, services, or facilities an organization or business has to offer.</li>
                <li>We will communicate with people with disabilities in a manner that considers the individual's specific disability.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Assistive Devices, Service Animals, Service Dogs or Guide Dogs</h2>
              <p className="mb-6">
                Individuals with disabilities who use an assistive device will be permitted to use their device to access the services provided by SPNC/RFAC.
              </p>

              <h2 className="text-2xl font-bold mb-4">Support Workers</h2>
              <p className="mb-6">
                If a person with a disability is accompanied by a support person, SPNC/RFAC will ensure that both persons are permitted to enter the premises together and that the person with a disability is not prevented from having access to the support person while on the premises. In remote settings, support workers are welcome to support an individual with disabilities.
              </p>

              <h2 className="text-2xl font-bold mb-4">Service Interruptions</h2>
              <p className="mb-6">
                If there is a temporary disruption in any of our services, either in whole or in part, SPNC/RFAC will provide notice of the disruption to the public via as many channels as possible, in accessible formats, where available. We will post physical notices where the disruption is taking place, as well as through other appropriate channels, such as email, phone, text, social media, or on our website.
              </p>
              <p className="mb-6">
                Notice of the disruption will include the reason for the disruption, its anticipated duration, and a description of any alternative facilities or services that are available.
              </p>

              <h2 className="text-2xl font-bold mb-4">Process for Receiving Feedback</h2>
              <p className="mb-6">
                SPNC/RFAC will accept feedback about the way it provides goods and services to persons with disabilities, in person, by phone, email (<a href="mailto:info@spnc-rfac.ca" className="text-fuchsia-600 hover:underline">info@spnc-rfac.ca</a>), or in another manner that is suitable for a person with a disability.
              </p>
              <p className="mb-6">
                When a complaint is received about the way we provide goods, services, or facilities to persons with disabilities, SPNC/RFAC will let the person who submitted the feedback know about the actions the organization will take to resolve the issue.
              </p>

              <h2 className="text-2xl font-bold mb-4">Transportation</h2>
              <p className="mb-6">
                SPNC/RFAC does not provide conventional or specialized commercial transportation services to passengers and is not required to adhere to the Transportation Standard.
              </p>

              <h2 className="text-2xl font-bold mb-4">In-Person Events</h2>
              <p className="mb-6">
                If SPNC/RFAC hosts in-person events, it will endeavour to utilize spaces that adhere to the Design of Public Spaces Standard of the AODA. SPNC/RFAC will consider the potential accessibility needs of employees and attendees when planning and hosting in-person events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}