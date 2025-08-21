import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faDownload, faFileAlt, faUsers, faGavel, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function ResourceLibraryPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/resources/frontline" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Frontline
          </Link>
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faBookOpen} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Resource Library for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Welcome to the comprehensive Resource Library, a curated collection of essential documents, guides, and tools designed to support your work with 2SLGBTQI+ seniors. We continually update this library with the latest research, best practices, and advocacy materials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="font-semibold text-lg mb-3">Inclusive Care Guides</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Guide to Affirming Senior Care (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Checklist for Inclusive Intake Forms (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Best Practices for 2SLGBTQI+ Senior Housing (PDF)</a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="font-semibold text-lg mb-3">Research & Reports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">National Survey on 2SLGBTQI+ Aging (2024)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Impact of Social Isolation on Queer Seniors (PDF)</a>

                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Health Disparities in 2SLGBTQI+ Older Adults (PDF)</a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="font-semibold text-lg mb-3">Advocacy Toolkits & Templates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Community Advocacy Action Plan Template (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Letter Template for Local Policy Makers (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Media Kit for 2SLGBTQI+ Senior Advocacy (PDF)</a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="font-semibold text-lg mb-3">Training Modules & Webinars</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Recorded Webinar: Understanding Gender Identity in Seniors (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Module: Addressing Ageism & Homophobia (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Cultural Competency Training for Staff (PDF)</a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faGavel} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="font-semibold text-lg mb-3">Legal & Rights Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Legal Rights Fact Sheet for 2SLGBTQI+ Seniors (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Housing Rights and Protections Overview (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Healthcare Decision-Making Guide (PDF)</a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="font-semibold text-lg mb-3">Funding Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Grant Application Tips & Tricks (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Directory of Senior-Focused Funding Bodies (PDF)</a>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-fuchsia-600 mr-2" />
                    <a href="/guide-to-affirming-senior-care.pdf" className="hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">Sample Budget Template for Programs (PDF)</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-fuchsia-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Share Your Resources</h3>
                <p className="text-gray-700 mb-4">
                  Do you have valuable resources, research, or tools that could benefit other frontline organizations? We welcome contributions to our resource library.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Submit a Resource
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}