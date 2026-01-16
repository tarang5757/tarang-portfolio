"use client";

import Link from "next/link";
import React from "react";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroSection() {
  const words = ["a Software Engineer", "a Problem Solver", "an Innovator"];

  return (
    <div className="min-h-[40vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between relative">
      <div className="space-y-6 text-center lg:text-left relative z-10">
        <h1 className="text-4xl font-normal lg:text-5xl">
          Hi, I&apos;m Tarang Patel 👋 <br />{" "}
          <span className="mt-2 block">
            {"And I'm"}
            <FlipWords words={words} />
          </span>
        </h1>

        <p className="md:w-76 text-xl text-white-300 font-extralight w-[75%]">
          {
            "I'm a fourth year student studying Computer Science at the York University. I am passionate about creating innovative solutions to pressing issues and making them readily available."
          }
        </p>

        <Link
          href={"mailto:tarang.patel.dev@gmail.com"}
          className="inline-block relative z-20"
        >
          <div className="group">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-500 ease-in-out group-hover:opacity-100 opacity-0">
              Contact Me!
            </h1>
            <h1 className="text-2xl text-white transition-all duration-500 ease-in-out absolute top-0 left-0 group-hover:opacity-0 opacity-100">
              Contact Me!
            </h1>
          </div>
        </Link>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0" />
    </div>
  );
}
