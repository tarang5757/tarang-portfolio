import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";

const GalleryPage = () => {
  const items = [
    "Hiking in the Mountains",
    "Weekend Photography", 
    "Travel Adventures"
  ];

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-gray-800 relative">
      <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
        <Navbar currentPage="gallery" />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Gallery</h1>
          <p className="text-xl text-gray-600">adventures</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {items.map((item, index) => (
            <div key={index} className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">{item}</span>
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
};

export default GalleryPage;