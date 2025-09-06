'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Users, HandHeart, Rainbow } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Remove direct Sanity client import since we'll use API route
import { Article, getCategoryColor, getCategoryLabel } from '@/lib/articleHelpers';
import { getFeaturedMembers, Member } from '@/lib/memberData';

interface HomeSectionProps {
  isActive: boolean;
}


export default function HomeSection({ isActive }: HomeSectionProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const memberSlides = getFeaturedMembers();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % memberSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log('🔍 Fetching articles from API route...');
        const response = await fetch('/api/articles');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const fetchedArticles = await response.json();
        console.log('✅ Fetched articles:', fetchedArticles);
        console.log('📊 Number of articles:', fetchedArticles.length);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('❌ Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memberSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memberSlides.length) % memberSlides.length);
  };

  const handleViewProfile = (member: Member) => {
    // Navigate to membership section with province parameter
    router.push(`/membership?province=${encodeURIComponent(member.province)}`);
  };

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      {/* Hero Section */}
      <div className="hero-background bg-white px-12 py-40 rounded-1xl shadow-lg text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" >
            Senior Pride Network Canada
          </h1>
          <div className="text-xl text-white max-w-4xl mx-auto drop-shadow-md">
            <p>Connecting 2SLGBTQI+ older people and the organizations that serve them.</p>
            <p>So every elder can live with dignity, safety, and connection anywhere in Canada.</p>
          </div>
        </div>
      </div>

      {/* Path Cards */}
      <div className="mt-8">
        <div className="w-full bg-fuchsia-100 py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-fuchsia-800">We have resources for</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/resources/allied" className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 block">
            <div className="mb-4 flex justify-center">
              <Users className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Organizations & Groups</h3>
            <div className="text-gray-700 text-base mb-2">
              Practical tools, templates, and a national peer network
            </div>
            <span className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800 cursor-pointer inline-block">
              Explore Resources →
            </span>
          </Link>
          <Link href="/resources/frontline" className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 block">
            <div className="mb-4 flex justify-center">
              <HandHeart className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Social Services, Healthcare & Government</h3>
            <div className="text-gray-700 text-base mb-2">
              Evidence-informed guidance and training to strengthen inclusive care
            </div>
            <span className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800 cursor-pointer inline-block">
              Explore Resources →
            </span>
          </Link>
          <Link href="/resources/seniors" className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 block">
            <div className="mb-4 flex justify-center">
              <Rainbow className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">2SLGBTQI+ Older People</h3>
            <div className="text-gray-700 text-base mb-2">
              Find affirming services, programs, and communities near you
            </div>
            <span className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800 cursor-pointer inline-block">
              Explore Resources →
            </span>
          </Link>
        </div>
      </div>

      {/* Latest Updates */}
      <section className="mt-16">
        <div className="w-full bg-blue-100 py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800">Latest Updates</h2>
          </div>
        </div>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Stay informed about the policies and initiatives shaping the future of 2SLGBTQI+ seniors in Canada.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article) => {
              const colors = getCategoryColor(article.category);
              return (
                <div key={article._id} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
                  <span className={`text-sm font-bold ${colors.text} ${colors.bg} py-1 px-2 rounded self-start`}>
                    {getCategoryLabel(article.category)}
                  </span>
                  <h3 className="text-xl font-bold mt-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 flex-1">{article.excerpt}</p>
                  <Link 
                    href={`/articles/${article.slug.current}`}
                    className={`mt-4 ${colors.button} ${colors.buttonHover} text-white font-semibold py-2.5 px-5 rounded-lg self-start inline-block text-center`}
                  >
                    → Read the {getCategoryLabel(article.category).toLowerCase()}
                  </Link>
                </div>
              );
            })
          ) : (
            // Fallback content while articles are loading or if none are found
            <>
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
                <span className="text-sm font-bold text-fuchsia-600 bg-fuchsia-100 py-1 px-2 rounded self-start">Open Letter</span>
                <h3 className="text-xl font-bold mt-3">Open Letter to Prime Minister Carney — Supporting 2SLGBTQI+ Seniors.</h3>
                <p className="text-gray-600 text-sm mt-2 flex-1">Our call to prioritize dignity, safety, and inclusion for older 2SLGBTQI+ people across Canada.</p>
                <button className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start">→ Read the open letter</button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
                <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-2 rounded self-start">Statement</span>
                <h3 className="text-xl font-bold mt-3">Our Statement for the 2025 Federal Election: A call for an inclusive future for older adults.</h3>
                <p className="text-gray-600 text-sm mt-2 flex-1">Key priorities to ensure equitable access, safety, and respect for 2SLGBTQI+ elders.</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start">→ Read the statement</button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
                <span className="text-sm font-bold text-emerald-600 bg-emerald-100 py-1 px-2 rounded self-start">Position Paper</span>
                <h3 className="text-xl font-bold mt-3">SPNC/RFAC Position Paper: Supporting 2SLGBTQI+ Seniors in Canada — A Call to Action.</h3>
                <p className="text-gray-600 text-sm mt-2 flex-1">Evidence-informed recommendations for governments and service providers.</p>
                <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-lg self-start">→ Read the position paper</button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Members Carousel */}
      <div className="mt-16">
        <div className="w-full bg-emerald-100 py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-emerald-800">Featured Members</h2>
          </div>
        </div>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          From coast to coast to coast, our members lead programs, build inclusive services, 
          and create community for 2SLGBTQI+ elders.
        </p>
        
        <div className="carousel relative max-w-2xl mx-auto">
          <div className="relative">
            {memberSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''} bg-white p-8 rounded-2xl text-center shadow min-h-[400px] flex flex-col justify-center ${index !== currentSlide ? 'absolute inset-0' : ''}`}
              >
                <div className="h-35 mb-4 flex items-center justify-center">
                  <img 
                    src={slide.logo} 
                    alt={`${slide.name} logo`} 
                    className="max-h-60 max-w-60 object-contain mx-auto"
                    style={{ height: '10rem', width: '10rem' }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{slide.name}</h3>
                <p className="text-gray-600 text-sm">{slide.description}</p>
                <button 
                  onClick={() => handleViewProfile(slide)}
                  className="mt-4 bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition-colors font-semibold cursor-pointer"
                >
                  View Full Profile →
                </button>
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
        
        {/* Discover All Members Button */}
        <div className="text-center mt-8">
          <Link
            href="/membership"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Discover All Members →
          </Link>
        </div>
      </div>

      {/* Our Supporters */}
      <div className="mt-16">
        <div className="w-full bg-purple-100 py-4 mb-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800">Our Work is Made Possible By</h2>
          </div>
        </div>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We gratefully acknowledge the support that enables us to advance dignity and inclusion for 2SLGBTQI+ older people nationwide.
        </p>

        <div className="flex justify-center items-center gap-4 max-w-4xl mx-auto">
          <div className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
            <img
              src="/supporters/WAGE-FEGC-R-e.png"
              alt="Women and Gender Equality Canada (WAGE)"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
            <img
              src="/supporters/Logo_Funded_by_New_Horizons.png"
              alt="New Horizons for Seniors Program"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="bg-white px-2 py-1 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
            <img
              src="/supporters/Unifor_SJF_LOGO .png"
              alt="Unifor"
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>
      </div>

    </section>
  );
}