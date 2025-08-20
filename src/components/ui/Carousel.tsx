'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface CarouselSlide {
  id: string;
  name: string;
  organization: string;
  quote: string;
  image?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="carousel relative max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide p-8 ${
              index === currentSlide ? 'active' : 'absolute inset-0'
            }`}
          >
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "{slide.quote}"
              </blockquote>
              <div className="font-semibold text-gray-800">{slide.name}</div>
              <div className="text-gray-600">{slide.organization}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevSlide}
          className="carousel-btn"
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="carousel-indicators flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-fuchsia-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="carousel-btn"
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}