'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface HomeSectionProps {
  isActive: boolean;
}

const memberSlides = [
  {
    id: 1,
    name: 'Rainbow Seniors of Montreal',
    description: 'Providing vital social and health services to the 2SLGBTQI+ senior community in Quebec.',
    logo: 'https://placehold.co/120x60/D946EF/FFFFFF?text=RSM'
  },
  {
    id: 2,
    name: 'ElderCare Toronto',
    description: 'An allied organization creating inclusive long-term care homes in the Greater Toronto Area.',
    logo: 'https://placehold.co/120x60/D946EF/FFFFFF?text=ECT'
  },
  {
    id: 3,
    name: 'Prairies Queer Seniors Alliance',
    description: 'A grassroots network connecting queer elders across Manitoba, Saskatchewan, and Alberta.',
    logo: 'https://placehold.co/120x60/D946EF/FFFFFF?text=PQSA'
  }
];

export default function HomeSection({ isActive }: HomeSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % memberSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memberSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memberSlides.length) % memberSlides.length);
  };

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      {/* Hero Section */}
      <div className="hero-background bg-white px-48 py-40 rounded-1xl shadow-lg text-center relative overflow-hidden">

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}>
            Senior Pride Network Canada
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto drop-shadow-md" style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
          }}>
            Connecting 2SLGBTQI+ older people and the organizations that serve them — so every elder can live with dignity, safety, and connection anywhere in Canada.
          </p>
        </div>
      </div>

      {/* Path Cards */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">We have resources for:</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold mb-2">Organizations & Groups</h3>
            <p className="text-gray-600">
              Strengthen your programs with tailored resources, training, and peer connections focused on older 2SLGBTQI+ people.
            </p>
            <button className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800">
              Explore Resources →
            </button>
          </div>
          <div className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-2">Social Services, Healthcare & Government</h3>
            <p className="text-gray-600">
              Access practical tools and guidance to make your services inclusive, respectful, and accessible for 2SLGBTQI+ elders.
            </p>
            <button className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800">
              Explore Resources →
            </button>
          </div>
          <div className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer">
            <div className="text-5xl mb-4">🌈</div>
            <h3 className="text-2xl font-bold mb-2">2SLGBTQI+ Older People</h3>
            <p className="text-gray-600">
              Connect with welcoming communities, find supportive resources, and discover opportunities to share your voice.
            </p>
            <button className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800">
              Explore Resources →
            </button>
          </div>
        </div>
      </div>

      {/* Members Carousel */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-2">Our members making difference</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          From coast to coast to coast, our members lead programs, build inclusive services, 
          and create community for 2SLGBTQI+ elders—here are a few of their stories.
        </p>
        
        <div className="carousel relative max-w-3xl mx-auto">
          <div className="relative">
            {memberSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''} bg-white p-8 rounded-2xl text-center shadow ${index !== currentSlide ? 'absolute inset-0' : ''}`}
              >
                <img 
                  src={slide.logo} 
                  alt={`${slide.name} logo`} 
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{slide.name}</h3>
                <p className="text-gray-600">{slide.description}</p>
                <a 
                  href="#" 
                  className="inline-block mt-4 font-semibold text-fuchsia-600 hover:text-fuchsia-800"
                >
                  View Full Profile →
                </a>
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={prevSlide}
              className="carousel-btn ml-[-10px]" 
              aria-label="Previous member"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={nextSlide}
              className="carousel-btn mr-[-10px]" 
              aria-label="Next member"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="carousel-indicators mt-4 flex justify-center gap-2">
            {memberSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={index === currentSlide ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-2">Latest Updates</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Stay informed about the policies and initiatives shaping the future of 2SLGBTQI+ seniors in Canada.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
            <span className="text-sm font-bold text-fuchsia-600 bg-fuchsia-100 py-1 px-2 rounded self-start">Open Letter</span>
            <h3 className="text-xl font-bold mt-3">Open Letter to Prime Minister Carney — Supporting 2SLGBTQI+ Seniors.</h3>
            <p className="text-gray-600 text-sm mt-2 flex-1">Our call to prioritize dignity, safety, and inclusion for older 2SLGBTQI+ people across Canada.</p>
            <button className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start">Explore resource</button>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
            <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-2 rounded self-start">Statement</span>
            <h3 className="text-xl font-bold mt-3">Our Statement for the 2025 Federal Election: A call for an inclusive future for older adults.</h3>
            <p className="text-gray-600 text-sm mt-2 flex-1">Key priorities to ensure equitable access, safety, and respect for 2SLGBTQI+ elders.</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start">Explore resource</button>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
            <span className="text-sm font-bold text-emerald-600 bg-emerald-100 py-1 px-2 rounded self-start">Position Paper</span>
            <h3 className="text-xl font-bold mt-3">SPNC/RFAC Position Paper: Supporting 2SLGBTQI+ Seniors in Canada — A Call to Action.</h3>
            <p className="text-gray-600 text-sm mt-2 flex-1">Evidence-informed recommendations for governments and service providers.</p>
            <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start">Explore resource</button>
          </div>
        </div>
      </section>
    </section>
  );
}