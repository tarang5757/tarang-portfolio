import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

const BlogPage = () => {
    type BlogPost = {
        title: string;
        date: string;
        content: string;
        link: string;
        complete: boolean;
    };

    const blogPosts: BlogPost[] = [

        {
            title: "My Journey into Web Development",
            date: "January 16, 2026",
            content:
                "From complete beginner to building my first full-stack application, here's how I started my journey into web development.",
            link: "/blog/journey-web-development",
            complete: true

        },
        {
            title: "Building a Personal Website with Next.js",
            date: "January 16, 2026",
            content:
                "Learn how I built this very website using Next.js, Tailwind CSS, and some other awesome tools.",
            link: "/blog/building-personal-website",
            complete: false
        }
    ];
    return (
        <div className="min-h-screen bg-[#FBF8F1] text-gray-800 relative">
            <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
                <Navbar currentPage="blog" />

                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
                    <p className="text-xl text-gray-600">
                        reflections, learnings, and experiences that I hope can inspire others
                        others
                    </p>
                </header>

                <div className="space-y-8">
                    {blogPosts.map((post, key) => (
                        <article key={key} className="pb-8">
                            <Link href={post.complete ? post.link : ""}>
                                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                            <p className="text-gray-700 text-md mb-4">{post.content}</p>
                            <Link
                                href={post.complete ? post.link : ""}
                                className="text-theme inline-flex items-center group"
                            >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {post.complete ? "Read more" : "Coming soon"}
                </span>
                                {post.complete && (
                                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                                )}
                            </Link>
                        </article>
                    ))}
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-200">
                    <SocialIcons />
                </footer>
            </div>
        </div>
    );
};

export default BlogPage;