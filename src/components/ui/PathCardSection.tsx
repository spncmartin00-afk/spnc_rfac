'use client';

import PathCard from './PathCard';
import { Building, Stethoscope, Rainbow } from 'lucide-react';

export default function PathCardSection() {
  const handleOrganizationsClick = () => {
    console.log('Navigate to organizations');
    // In a real app, you would use Next.js router here
    // router.push('/resources/organizations');
  };

  const handleHealthcareClick = () => {
    console.log('Navigate to healthcare');
    // router.push('/resources/healthcare');
  };

  const handleSeniorsClick = () => {
    console.log('Navigate to seniors');
    // router.push('/resources/seniors');
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">We have resources for:</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PathCard
          icon={<Building className="w-12 h-12 icon-gradient" />}
          title="Organizations & Groups"
          description="Strengthen your programs with tailored resources, training, and peer connections focused on older 2SLGBTQI+ people."
          onClick={handleOrganizationsClick}
        />
        <PathCard
          icon={<Stethoscope className="w-12 h-12 icon-gradient" />}
          title="Social Services, Healthcare & Government"
          description="Access practical tools and guidance to make your services inclusive, respectful, and accessible for 2SLGBTQI+ elders."
          onClick={handleHealthcareClick}
        />
        <PathCard
          icon={<Rainbow className="w-12 h-12 icon-gradient" />}
          title="2SLGBTQI+ Older People"
          description="Connect with welcoming communities, find supportive resources, and discover opportunities to share your voice."
          onClick={handleSeniorsClick}
        />
      </div>
    </div>
  );
}