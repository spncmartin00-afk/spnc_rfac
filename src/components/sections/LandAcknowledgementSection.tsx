'use client';

interface LandAcknowledgementSectionProps {
  isActive: boolean;
}

export default function LandAcknowledgementSection({ isActive }: LandAcknowledgementSectionProps) {
  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Land Acknowledgement</h1>
      </div>
      
      <div className="mt-12 bg-white p-8 rounded-2xl">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            We acknowledge that we live and work on the traditional territories of Indigenous peoples across Canada. 
            We recognize the ongoing impacts of colonization and commit to supporting Indigenous 2SLGBTQI+ Elders 
            and communities in our work.
          </p>
          <p className="leading-relaxed">
            As we work to create inclusive spaces for 2SLGBTQI+ older adults, we acknowledge the particular 
            challenges faced by Indigenous 2SLGBTQI+ Elders and commit to learning, listening, and supporting 
            reconciliation efforts.
          </p>
          <p className="leading-relaxed">
            We are committed to building respectful relationships with Indigenous communities and supporting 
            the self-determination of Indigenous 2SLGBTQI+ people.
          </p>
        </div>
      </div>
    </section>
  );
}