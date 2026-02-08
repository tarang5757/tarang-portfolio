import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";

const GalleryPage = () => {
  const trips = [
    {
      location: "Restoule Provincial Park",
      year: "2024",
      images: [
        { src: "/restoule/IMG_2167.jpg", alt: "sunrise morning"},
        { src: "/restoule/IMG_2194.jpg", alt: "lake" },
        { src: "/restoule/IMG_2201.jpg", alt: "trail walk" },
        { src: "/restoule/IMG_2204.jpg", alt: "trail walk" },
        { src: "/restoule/IMG_2224.jpg", alt: "lake again" },
        { src: "/restoule/IMG_2262.jpg", alt: "canoeing - almost died ngl" },
        { src: "/restoule/image00003.jpeg", alt: "crazy sky bruh" },
        { src: "/restoule/image00005.jpeg", alt: "starry night?" },
        { src: "/restoule/image00006.jpeg", alt: "late night campfire" }
      ]
    }
  ];

  return (
      <div className="min-h-screen bg-[#FBF8F1] text-gray-800 relative">
        <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
          <Navbar currentPage="gallery" />

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Gallery</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
               camping pics lol
            </p>
          </header>

          <main>
            {trips.map((trip, tripIndex) => (
                <section key={tripIndex} className="mb-16">
                  <div className="flex items-baseline justify-between mb-8 border-b border-gray-200 pb-3">
                    <h2 className="text-2xl font-semibold tracking-tight">{trip.location}</h2>
                    <span className="text-gray-400 font-mono text-sm">{trip.year}</span>
                  </div>

                  {/* Single Column for Maximum Impact */}
                  <div className="space-y-16">
                    {trip.images.map((item, index) => (
                        <div key={index} className="group relative">
                          {/* Image Container */}
                          <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm aspect-video cursor-default">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                            />

                            {/* Dark Gradient Overlay - Restored */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Hover Text with Slide-up - Restored */}
                            <div className="absolute bottom-6 left-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                              <p className="text-white text-xl  font-semibold   ">
                                {item.alt}
                              </p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </section>
            ))}
          </main>

          <footer className="mt-24 pt-8 border-t border-gray-200">
            <SocialIcons />
          </footer>
        </div>
      </div>
  );
};

export default GalleryPage;