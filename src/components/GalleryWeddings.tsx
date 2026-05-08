'use client';

import { useRef } from 'react';

const galleryImages = [
  {
    alt: "A candid wedding photograph showing a bride and groom laughing together during a golden hour outdoor reception",
    src: "https://lh3.googleusercontent.com/aida/ADBb0uh3hywHJ2py6crH4m4_O7EqzxgH2A6eeBF9-MP-9-0w31rvj19MS-dsLvO4XVDf_LlDUxw7YkmEdY7BG-U96rMRXxjw2TLtB8bJUnkOpJFhiTdoc6IxQHyFkbreJjrs_dCTTfHmS1Zg386wEP-faD2hDnWihXGPV5pF35B2PsKgSSrQkGwFyFGnB1WW1AHNA3kmPb5PyyDf2iJ3ETUT2CLxkAfoeOwR52NcsTywzC7qSkKDALMx4Cjij01I2-3AO5voK9Pwox33MA",
    aspect: "3/4",
    width: "400px"
  },
  {
    alt: "A wide cinematic shot of a wedding ceremony in an ancient stone cathedral",
    src: "https://lh3.googleusercontent.com/aida/ADBb0uhExeMhGR_WodRKM_0l8Ece-gpnPKPqUWcpH0oTkjQv79QWyAUW9lZm09uwuRxTueXKbQmp9ExwCTKJQH8x82P8tFnm0JobAz8ViZNB6p9fRL62q5Dv3uTdFOmGtbLRsa44oJjm00E5NEoLZpeKueG-EDUzEif2oAtCfFbV_NSsUxqV-BX0ge3Koj24IabW0iLG4106ugegYDJ_f5IUddINOzS3nVq42zm8uQnGkyBjcly0kAEOsEvEQQlsRhsdfw1Tz08IgXo4",
    aspect: "16/9",
    width: "600px"
  },
  {
    alt: "A minimalist wedding detail shot showing two hands entwined",
    src: "https://lh3.googleusercontent.com/aida/ADBb0uhAWaPytB97vqqOnS_8eoL8g-mltqYIkvwV-lplSjZJSvM6HXq6ba2zviW31S9kKMMIZsPHbYoK4TFlHynIt4LMdSrqVevpFzODwHGs7Zq9yT8wCnqPdpQDPd2I39QNGLpqLGevFzMd73zqosNb7qYV3AAgKogUEpRA2prDhnxtoDiTHW8YSyzgYXJtwkdoZZ9GxZ9kSrYolcZMaForxlfg-C-dTpKuE4WinjukAz1PytEUWj9IIIIqtOC6Lqj2GLoCKZC_kbFJ6Q",
    aspect: "3/4",
    width: "400px"
  },
  {
    alt: "Cinematic wedding moment",
    src: "https://lh3.googleusercontent.com/aida/ADBb0uhOgXAVhRP-lQWIfA6Inic9Yg4hl1fYqptinOgg5ttveZktBHz39PyDUra9QAuFV_rl1caEO8YQTIfVlwO5sNHFA6rDxzRDO7mPIN5P0tqbp6xKyd7OR-UanCeM07rccqQs762HbHtuWlHR88_GGc9baSz8hUISH6mlMDkBOJwTWAixI4fn-mJa-xAmI7X6l1S2T1IYvPfKoUyZDtRdlZEWNRF-i9t5uI3V8rUic2M-0Q48FsYGB_EQJnRZ-IPGTVqbBHuTJAtP7Q",
    aspect: "16/9",
    width: "600px"
  },
  {
    alt: "Intimate wedding detail",
    src: "https://lh3.googleusercontent.com/aida/ADBb0uj3NECvNCuXcormR1-C780rsi1xgsNdEMxknxkEkiiZ2_TKpXKRsyOhrtVvJ-vRCjbwT9HvwfpM9KE82ia8vH6KE2D8tb923uPG6Jfh90TMTIvvhkAq1Ty90smqg1dLKpkrRCWFY9DyLzFQE8IDKKrURMEH85UuDCi8omne-SuDIag2nesYPBP8WOWH28CX7OJNwd9rgItJXFz7pCH2MpL95pdhhjN0nxq3yi8kw5-gOLAGeTN6TPATcL-3vZilTZzbv3lZazRUSg",
    aspect: "3/4",
    width: "400px"
  }
];

export default function GalleryWeddings() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-section-gap bg-black overflow-hidden" id="work">
      <div className="px-margin-page mb-12 flex justify-between items-end">
        <div>
          <span className="font-label-caps text-label-caps text-primary">GALERÍA</span>
          <h2 className="font-headline-lg text-headline-lg text-white">Bodas</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-gutter overflow-x-auto hide-scrollbar px-margin-page snap-x"
      >
        {galleryImages.map((image, idx) => (
          <div
            key={idx}
            className="flex-none snap-center group relative overflow-hidden rounded-xl"
            style={{ width: image.width, aspectRatio: image.aspect }}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={image.alt}
              src={image.src}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 backdrop-blur-[2px]">
              <span className="font-label-caps text-label-caps text-white">GALERÍA</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
