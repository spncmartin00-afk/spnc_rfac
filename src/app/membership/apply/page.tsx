'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Modal from '@/components/ui/Modal';

export default function MembershipApply() {
  const [membershipType, setMembershipType] = useState<'frontline' | 'allied' | ''>('');
  const [organizationType, setOrganizationType] = useState<string[]>([]);
  const [otherOrganizationType, setOtherOrganizationType] = useState('');
  const [agreeToValues, setAgreeToValues] = useState(false);
  const [agreeToNewsletter, setAgreeToNewsletter] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [formData, setFormData] = useState({
    organizationName: '',
    website: '',
    province: '',
    primaryContactName: '',
    title: '',
    email: '',
    phone: '',
    missionDescription: '',
    frontlineServices: '',
    alliedEfforts: '',
    date: new Date().toISOString().split('T')[0]
  });

  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
    'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 
    'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 
    'Saskatchewan', 'Yukon', 'National', 'International'
  ];

  const organizationTypes = [
    'Non-profit organization',
    'Grassroots group',
    'Community center',
    'Institution',
    'Business',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOrganizationTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setOrganizationType(prev => [...prev, type]);
    } else {
      setOrganizationType(prev => prev.filter(t => t !== type));
      if (type === 'Other') {
        setOtherOrganizationType('');
      }
    }
  };

  const showModal = (type: 'success' | 'error', title: string, message: string) => {
    setModalState({
      isOpen: true,
      type,
      title,
      message
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!membershipType || !agreeToValues) {
      showModal('error', 'Missing Required Fields', 'Please fill in all required fields and agree to the terms.');
      return;
    }
    
    const submissionData = {
      membershipType,
      organizationType: organizationType.includes('Other') 
        ? [...organizationType.filter(t => t !== 'Other'), `Other: ${otherOrganizationType}`]
        : organizationType,
      ...formData,
      agreeToValues,
      agreeToNewsletter
    };
    
    console.log('Form submitted:', submissionData);
    showModal('success', 'Application Submitted Successfully!', 'Thank you for your application! You will receive a confirmation email within 2-3 business days with your membership details and next steps.');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">SPNC/RFAC Membership Application Form</h1>
            <p className="text-xl text-purple-100">
              Thank you for your interest in joining the Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC). Together, we're building a stronger, more inclusive Canada for 2SLGBTQI+ seniors.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-12">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
            
            {/* Membership Type Selection */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Membership Type Selection</h2>
              {/* <p className="text-sm text-red-600 mb-4">*Required fields</p> */}
              <div className="space-y-4">
                <p className="font-semibold mb-3">Please select your membership type: *</p>
                
                <label className="flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                  <input
                    type="radio"
                    name="membershipType"
                    value="frontline"
                    checked={membershipType === 'frontline'}
                    onChange={(e) => setMembershipType(e.target.value as 'frontline')}
                    className="mt-1"
                    required
                  />
                  <div>
                    <div className="font-semibold">Frontline Membership</div>
                    <div className="text-sm text-gray-600 mt-1">For organizations that exclusively serve older 2SLGBTQI+ people</div>
                  </div>
                </label>

                <label className="flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                  <input
                    type="radio"
                    name="membershipType"
                    value="allied"
                    checked={membershipType === 'allied'}
                    onChange={(e) => setMembershipType(e.target.value as 'allied')}
                    className="mt-1"
                    required
                  />
                  <div>
                    <div className="font-semibold">Allied Membership</div>
                    <div className="text-sm text-gray-600 mt-1">For organizations serving seniors and committed to becoming more inclusive and affirming of 2SLGBTQI+ people</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Organization Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Organization Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Organization/Group Name: *</label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Website (if applicable):</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Province/Territory: *</label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  >
                    <option value="">Select Province/Territory</option>
                    {provinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Organization Type: *</label>
                  <div className="space-y-2">
                    {organizationTypes.map(type => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={organizationType.includes(type)}
                          onChange={(e) => handleOrganizationTypeChange(type, e.target.checked)}
                          className="rounded focus:ring-fuchsia-500"
                        />
                        <span>{type}{type === 'Other' ? ':' : ''}</span>
                        {type === 'Other' && organizationType.includes('Other') && (
                          <input
                            type="text"
                            value={otherOrganizationType}
                            onChange={(e) => setOtherOrganizationType(e.target.value)}
                            className="ml-2 p-2 border border-gray-300 rounded flex-1"
                            placeholder="Please specify"
                          />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Primary Contact Name: *</label>
                  <input
                    type="text"
                    name="primaryContactName"
                    value={formData.primaryContactName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Title/Position: *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address: *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* About Your Work */}
            <div>
              <h2 className="text-2xl font-bold mb-6">About Your Work</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Please briefly describe your organization's mission and the populations you serve: *</label>
                  <textarea
                    name="missionDescription"
                    value={formData.missionDescription}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    maxLength={200}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                    placeholder="Text box - max 200 words"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.missionDescription.split(' ').length}/200 words
                  </p>
                </div>

                {membershipType === 'frontline' && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">For Frontline Members: Describe the programs/services you offer specifically for 2SLGBTQI+ seniors: *</label>
                    <textarea
                      name="frontlineServices"
                      value={formData.frontlineServices}
                      onChange={handleInputChange}
                      required={membershipType === 'frontline'}
                      rows={4}
                      maxLength={200}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                      placeholder="Text box - max 200 words"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.frontlineServices.split(' ').length}/200 words
                    </p>
                  </div>
                )}

                {membershipType === 'allied' && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">For Allied Members: Describe your current inclusion efforts or goals for better serving 2SLGBTQI+ seniors:</label>
                    <textarea
                      name="alliedEfforts"
                      value={formData.alliedEfforts}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={200}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                      placeholder="Text box - max 200 words"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.alliedEfforts.split(' ').length}/200 words
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Agreement */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Agreement</h2>
              
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={agreeToValues}
                    onChange={(e) => setAgreeToValues(e.target.checked)}
                    required
                    className="mt-1 rounded focus:ring-fuchsia-500"
                  />
                  <span>I confirm that the information provided is accurate and that our organization agrees to uphold SPNC/RFAC's values of inclusion, respect, and dignity for all 2SLGBTQI+ seniors. *</span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={agreeToNewsletter}
                    onChange={(e) => setAgreeToNewsletter(e.target.checked)}
                    className="mt-1 rounded focus:ring-fuchsia-500"
                  />
                  <span>I agree to receive SPNC/RFAC newsletters and updates (you can unsubscribe at any time)</span>
                </label>

                <div>
                  <label className="block text-sm font-semibold mb-2">Date: *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="inline-block px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-lg transition-colors mb-6"
              >
                Submit Application
              </button>
              
              <div className="text-sm text-gray-600 space-y-2">
                <p>Upon submission, you will receive a confirmation email within 2-3 business days with your membership details and next steps.</p>
                <p>Questions? Contact us at <a href="mailto:info@spnc-rfac.ca" className="text-fuchsia-600 hover:underline">info@spnc-rfac.ca</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for feedback */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        type={modalState.type}
      >
        <p>{modalState.message}</p>
      </Modal>
    </Layout>
  );
}