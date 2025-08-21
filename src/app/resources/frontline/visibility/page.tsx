import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faNewspaper, faAward, faBullhorn, faCamera } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function VisibilityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="flex items-center mb-6">
              <Link href="/resources/frontline" className="flex items-center text-fuchsia-600 hover:text-fuchsia-800 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Frontline
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faStar} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Visibility & Recognition for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Showcase your work via our directory and spotlight features. Gain recognition for your contributions to 2SLGBTQI+ senior care and connect with the broader community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faEye} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Public Directory Listing</h3>
                <p className="text-gray-600 text-sm mb-4">Get featured in our searchable directory of frontline organizations serving 2SLGBTQI+ seniors across Canada.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Submit for Directory →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faNewspaper} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Spotlight Features</h3>
                <p className="text-gray-600 text-sm mb-4">Be featured in our monthly newsletter and website spotlights highlighting innovative programs and success stories.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Nominate Your Organization →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faAward} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Excellence Awards</h3>
                <p className="text-gray-600 text-sm mb-4">Apply for annual awards recognizing outstanding contributions to 2SLGBTQI+ senior care and advocacy.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  View Award Categories →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Media Opportunities</h3>
                <p className="text-gray-600 text-sm mb-4">Get connected with media outlets and speaking opportunities to share your expertise and advocate for change.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Express Interest →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCamera} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Social Media Features</h3>
                <p className="text-gray-600 text-sm mb-4">Share your stories and achievements through our social media channels to reach a wider audience.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Share Your Story →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faNewspaper} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Research Participation</h3>
                <p className="text-gray-600 text-sm mb-4">Participate in research studies and contribute to the growing body of knowledge in 2SLGBTQI+ aging.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Join Research →
                </a>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Featured Organizations</h2>
              <p className="text-center text-gray-700">
                Celebrating the outstanding work of frontline organizations across Canada
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-fuchsia-100 p-3 rounded-full">
                      <FontAwesomeIcon icon={faStar} className="text-fuchsia-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-fuchsia-600">Rainbow Senior Services - Toronto</h3>
                      <p className="text-sm text-gray-600">February 2024 Spotlight</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Recognized for their innovative intergenerational programming that connects 2SLGBTQI+ seniors with younger community members, reducing isolation and fostering mutual support.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">Innovative Programming</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Community Building</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Ontario</span>
                  </div>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Read Full Story →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-fuchsia-100 p-3 rounded-full">
                      <FontAwesomeIcon icon={faAward} className="text-fuchsia-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-fuchsia-600">Pride Elders Society - Vancouver</h3>
                      <p className="text-sm text-gray-600">2024 Excellence Award Winner</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Winner of the Housing Innovation Award for developing Canada's first 2SLGBTQI+ affirming senior housing complex with specialized support services and programming.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">Housing Innovation</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Policy Change</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">British Columbia</span>
                  </div>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Learn About Their Work →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-fuchsia-100 p-3 rounded-full">
                      <FontAwesomeIcon icon={faBullhorn} className="text-fuchsia-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-fuchsia-600">Equality Health Network - Halifax</h3>
                      <p className="text-sm text-gray-600">Media Feature</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Featured in national media for their groundbreaking research on healthcare disparities affecting 2SLGBTQI+ seniors in rural Atlantic Canada.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">Research Excellence</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Rural Communities</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Atlantic Canada</span>
                  </div>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">View Research Results →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-fuchsia-100 p-3 rounded-full">
                      <FontAwesomeIcon icon={faCamera} className="text-fuchsia-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-fuchsia-600">Two-Spirit Elders Circle - Winnipeg</h3>
                      <p className="text-sm text-gray-600">Social Media Spotlight</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Highlighted for their culturally-centered programming that honors Two-Spirit traditions while providing contemporary support services for Indigenous 2SLGBTQI+ seniors.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">Cultural Programming</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Indigenous-Led</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Manitoba</span>
                  </div>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Follow Their Story →</a>
                </div>
              </div>
            </section>

            <section className="bg-fuchsia-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">2024 Excellence Awards</h3>
              <p className="text-center text-gray-700 mb-6">
                Recognizing outstanding contributions to 2SLGBTQI+ senior care and advocacy
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <FontAwesomeIcon icon={faAward} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Innovation in Care</h4>
                  <p className="text-sm text-gray-700 mb-3">Recognizing creative approaches to service delivery and support</p>
                  <p className="text-xs text-fuchsia-600 font-semibold">Applications Open: March 1</p>
                </div>

                <div className="bg-white p-4 rounded-lg text-center">
                  <FontAwesomeIcon icon={faStar} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Community Impact</h4>
                  <p className="text-sm text-gray-700 mb-3">Celebrating measurable positive outcomes for seniors served</p>
                  <p className="text-xs text-fuchsia-600 font-semibold">Applications Open: March 1</p>
                </div>

                <div className="bg-white p-4 rounded-lg text-center">
                  <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Advocacy Excellence</h4>
                  <p className="text-sm text-gray-700 mb-3">Honoring effective advocacy for policy and systemic change</p>
                  <p className="text-xs text-fuchsia-600 font-semibold">Applications Open: March 1</p>
                </div>

                <div className="bg-white p-4 rounded-lg text-center">
                  <FontAwesomeIcon icon={faEye} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Rising Star</h4>
                  <p className="text-sm text-gray-700 mb-3">Recognizing emerging organizations making significant impact</p>
                  <p className="text-xs text-fuchsia-600 font-semibold">Applications Open: March 1</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <a href="#" className="bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Learn More About Awards
                </a>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Get Your Organization Featured</h3>
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-center">Share Your Success Stories</h4>
                <p className="text-center mb-6">
                  We're always looking for inspiring stories of organizations making a difference in the lives of 2SLGBTQI+ seniors. Your work deserves recognition!
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <FontAwesomeIcon icon={faNewspaper} className="text-2xl mb-2" />
                    <h5 className="font-semibold mb-2">Tell Your Story</h5>
                    <p className="text-sm">Submit your success stories and program highlights</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <FontAwesomeIcon icon={faCamera} className="text-2xl mb-2" />
                    <h5 className="font-semibold mb-2">Share Photos & Videos</h5>
                    <p className="text-sm">Visual content helps bring your work to life</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <FontAwesomeIcon icon={faStar} className="text-2xl mb-2" />
                    <h5 className="font-semibold mb-2">Get Featured</h5>
                    <p className="text-sm">Be highlighted across our platforms and network</p>
                  </div>
                </div>
                <div className="text-center">
                  <a href="#" className="bg-white text-fuchsia-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 mr-4">
                    Submit Your Story
                  </a>
                  <a href="#" className="bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-800">
                    Join Media List
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-center">Visibility Toolkit</h3>
              <p className="text-center text-gray-700 mb-6">
                Resources to help you effectively communicate your impact and reach new audiences
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <FontAwesomeIcon icon={faCamera} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Photography Guidelines</h4>
                  <p className="text-sm text-gray-700 mb-3">Tips for capturing compelling images of your programs and services</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Download Guide →</a>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon={faNewspaper} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Story Templates</h4>
                  <p className="text-sm text-gray-700 mb-3">Structured formats for sharing success stories and impact narratives</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Access Templates →</a>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Media Training</h4>
                  <p className="text-sm text-gray-700 mb-3">Workshops on effective communication with media and public speaking</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register for Training →</a>
                </div>
              </div>
            </section>

            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">Ready to Increase Your Visibility?</h3>
                <p className="text-gray-700 mb-4">
                  Join our network of recognized frontline organizations and showcase your valuable contributions to the community.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}