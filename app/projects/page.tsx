import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";

const ProjectsPage = () => {
    type Project = {
        title: string;
        description: string;
        skills: string[];
        github: string;
        demo: string;
    };

    const projects: Project[] = [
        {
            title: "Leafwheels",
            description:
                "Ecommerce Website for EV vehicles with all core features such as  payments, browsing-items, cart-page, account, and much more. ",
            skills: ["SpringBoot", "Java", "React", "Docker", "Redis", "Grafana", "Prometheus"],
            github: "https://github.com/Weilei424/leafwheels",
            demo: "",
        },
        {
            title: "Invite-Us",
            description:
                "Browser-based Light Code editor that allows you to collaborate with friends to do mock interviews using real-time features such as cursor-highlights, syntax-autocomplete and code-execution.",
            skills: ["React.js", "Flask", "Python", "Docker", "various libraries"],
            github: "https://github.com/tarang5757/invite-us",
            demo: "",
        },
        {
            title: "CTRL-HACK-DEL 1.0",
            description:
                "Student-Led York University Hackathon website for 2024 where i worked on the frontend team to design, build and implement pages and dashboard.",
            skills: ["SQL", "Nextjs", "AWS", "Tailwind CSS", "Typescript", "Etc..."],
            github: "https://www.ctrlhackdel.com/",
            demo: "",
        },
    ];

    return (
        <div className="min-h-screen bg-bgtheme text-gray-800 relative">
            <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
                <Navbar currentPage="projects" />

                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
                    <p className="text-xl text-gray-600">
                       personal/team projects that I&apos;ve worked on
                    </p>
                </header>

                <div className="space-y-12">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="border border-gray-200 bg-[#FAFBFA] rounded-lg p-6 shadow-sm"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex gap-2 mb-4">
                                {project.skills.map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-[#F6A45C] transition-colors"
                                    aria-label="GitHub"
                                >
                                </a>
                                <a
                                    href={project.demo}
                                    className="text-gray-700 hover:text-[#F6A45C] transition-colors"
                                    aria-label="Live Demo"
                                >
                                </a>
                            </div>
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

export default ProjectsPage;