import React from "react";
import SocialIcons from "@/components/SocialIcons";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tarangx.tech/"),
  title: "Tarang Patel",
  description: "Engineer, Student, Builder",
  openGraph: {
    title: "Tarang Patel",
    description: "Engineer, Student, Builder",
    url: "https://tarangx.tech/",
    siteName: "Tarang Patel",
    images: [
      {
        url: "/logo3.png",
        width: 1200,
        height: 630,
        alt: "Tarang Patel - Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarang Patel",
    description: "Engineer, Student, Builder",
    images: ["/logo3.png"],
  },
};

const Essentials = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F1] text-gray-800 relative">
      <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
        <Navbar currentPage="about" />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tarang Patel</h1>
          <h2 className="text-xl md:text-2xl text-gray-600">
            Engineer, Learner, Builder
          </h2>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="mb-4">
            I&apos;m a software engineer who likes to build resilient and
            scalable systems, dig deep into open source projects and show off
            the capabilities of the newest technologies
          </p>
          <p className="mb-4">
            I&apos;m currently studying Computer Science at York University and
            I will be working at{" "}
            <span className="text-integria-consulting">
              Integria Consulting
            </span>{" "}
            in the Winter.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Recently</h3>
          <ul>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr     -3 mt-0.5">—</span>
              <span>Can't wait for summer 2026! </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>Studying Applied Machine Learning and Data Mining Currently at York University</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>
                Learning Generative Ai and RAG Models in Software Development
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>
                Building This portfolio right now
              </span>
            </li>
          </ul>
        </section>
        <section>
          <SocialIcons />
        </section>
      </div>
    </div>
  );
};

export default Essentials;
