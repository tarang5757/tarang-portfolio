import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";

type Experience = {
    company: string;
    position: string;
    period: string;
    description?: string;
    isHighlighted?: boolean;
};

const ExperiencesPage = () => {
    const experiences: Experience[] = [
        {
            company: "Integria Consulting",
            position: "Full-Stack Developer",
            period: "Winter 2026",
            description: "Under SaaS platform team ",
        },
        {
            company: "Open-Doors",
            position: "Lead Developer",
            period: "Summer 2025",
            description:
                "I built a webpage that serves as a bridge between 2 groups (farmers and food banks) and connect them via point-based matching algorithm.",
        },
        {
            company: "CTRL-HACK-DEL",
            position: "Lead Developer",
            period: "Summer 2025",
            description:
                "Served in the frontend team to design, build and implement pages  and dashboard using nextjs, react, typescript and etc for hackathon participants.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#FBF8F1] text-gray-800 relative">
            <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
                <Navbar currentPage="experiences" />

                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Experience</h1>
                    <p className="text-xl text-gray-600">the journey so far</p>
                </header>

                <div className="space-y-12">
                    <p>work in progress!</p>
                    {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className={
                index < experiences.length - 1
                  ? "border-b border-gray-200 pb-10"
                  : ""
              }
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h2 className="text-2xl font-semibold">
                    <span className="text-theme">{exp.company}</span>
                  </h2>
                  <h3 className="text-lg text-gray-700">{exp.position}</h3>
                </div>
                <span className="text-gray-500 text-sm mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              {exp.description && (
                <p className="text-gray-600 mt-3">{exp.description}</p>
              )}
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

export default ExperiencesPage;