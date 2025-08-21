'use client';

import { Scale, BookOpen, Users, Megaphone, Leaf, TrendingUp } from 'lucide-react';

interface DonateSectionProps {
  isActive: boolean;
}

export default function DonateSection({ isActive }: DonateSectionProps) {
  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Support Our Mission: Donate to SPNC/RFAC</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          As a national non-profit organization, SPNC/RFAC relies on the generosity of individuals, foundations, and corporate partners to continue our vital work uniting, advocating for, and empowering 2SLGBTQI+ seniors across Canada.
        </p>
      </div>
      
      <div className="mt-10 max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Make a Gift</h2>
        <p className="text-gray-600 text-center mt-2">Choose a suggested amount or enter a custom amount.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-3 rounded-full bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700">$25</button>
          <button className="px-6 py-3 rounded-full bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700">$50</button>
          <button className="px-6 py-3 rounded-full bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700">$100</button>
          <button className="px-6 py-3 rounded-full bg-fuchsia-50 text-fuchsia-700 font-bold hover:bg-fuchsia-100">$250</button>
          <button className="px-6 py-3 rounded-full bg-fuchsia-50 text-fuchsia-700 font-bold hover:bg-fuchsia-100">$500</button>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
          <input 
            id="custom-amount" 
            type="number" 
            min="1" 
            step="1" 
            placeholder="Enter other amount"
            className="w-full sm:w-64 p-4 bg-white border border-gray-300 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
          />
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full transition-colors">
            Donate Now
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Why Your Contribution Matters: Creating Tangible Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl">
            <Scale className="w-8 h-8 icon-gradient mb-2" />
            <h3 className="font-bold text-lg mt-2">Fuel Advocacy Efforts</h3>
            <p className="text-gray-600 text-sm">Champion critical policy changes for better rights and protections.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <BookOpen className="w-8 h-8 icon-gradient mb-2" />
            <h3 className="font-bold text-lg mt-2">Develop Resources</h3>
            <p className="text-gray-600 text-sm">Help us create and share essential guides and training materials.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <Users className="w-8 h-8 icon-gradient mb-2" />
            <h3 className="font-bold text-lg mt-2">Build Community</h3>
            <p className="text-gray-600 text-sm">Support events and platforms where seniors can connect and thrive.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <Megaphone className="w-8 h-8 icon-gradient mb-2" />
            <h3 className="font-bold text-lg mt-2">Support Outreach</h3>
            <p className="text-gray-600 text-sm">Fund programs that raise awareness and promote understanding.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <Leaf className="w-8 h-8 icon-gradient mb-2" />
            <h3 className="font-bold text-lg mt-2">Ensure Sustainability</h3>
            <p className="text-gray-600 text-sm">Your support helps maintain services and expand our vital reach.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <TrendingUp className="w-8 h-8 icon-gradient mb-2" />
            <h3 className="font-bold text-lg mt-2">Expand Our Impact</h3>
            <p className="text-gray-600 text-sm">Help us reach more 2SLGBTQI+ seniors and communities across Canada.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center bg-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800">Make a Secure Donation Today!</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Every contribution, no matter the size, makes a tangible difference in creating a more inclusive, respectful, and supportive environment for older 2SLGBTQI+ people throughout Canada.
        </p>
        <a href="#" className="inline-block mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-lg">
          Go to Donation Portal
        </a>
      </div>
      
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-800">Legacy Giving</h3>
          <p className="text-gray-600 mt-2">Consider including SPNC/RFAC in your will or estate plan to leave a lasting impact.</p>
          <a href="#" className="text-fuchsia-600 hover:underline text-sm font-semibold mt-2 inline-block">Learn More About Legacy Giving →</a>
        </div>
        <div className="bg-white p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-800">Corporate Partnerships</h3>
          <p className="text-gray-600 mt-2">Partner with us to demonstrate your commitment to diversity, equity, and inclusion.</p>
          <a href="#" className="text-fuchsia-600 hover:underline text-sm font-semibold mt-2 inline-block">Explore Partnership Options →</a>
        </div>
      </div>
      
      <div className="mt-12 text-center bg-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions about donating?</h2>
        <p className="text-gray-600 mb-6">
          We'd love to help. Reach our team at <a href="mailto:info@spnc-rfac.ca" className="text-fuchsia-600 hover:underline font-semibold">info@spnc-rfac.ca</a> or <a href="tel:1-123-456-7890" className="text-fuchsia-600 hover:underline font-semibold">1-123-456-7890</a>. You can also send a message via our contact form.
        </p>
        <a href="#" className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg">
          Contact Us
        </a>
      </div>
    </section>
  );
}