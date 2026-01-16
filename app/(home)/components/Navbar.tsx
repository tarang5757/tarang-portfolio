import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/tarangpatel11/",
      label: "LinkedinIn",
      icon: SiLinkedin,
    },
    {
      link: "http://github.com/tarang5757",
      label: "Github",
      icon: SiGithub,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="alex-brush-regular text-3xl font-light">
        Tarang Patel 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
