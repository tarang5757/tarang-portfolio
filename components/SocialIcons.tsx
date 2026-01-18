import React from "react";
import Image from "next/image"

const SocialIcons = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <a
          href="mailto:tarang.patel.dev@gmail.com"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="Email"
        >
          <Image
              src="/icons/gmail.png"
              alt="Description of my icon"
              width={20}
              height={20}
          />
        </a>

        <a
          href="https://github.com/tarang5757"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="GitHub"
        >
          <Image src="/icons/github-sign.png" alt="My Github" width={20} height={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/tarangpatel11/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="LinkedIn"
        >
          <Image src="/icons/linkedin.png" alt="My Linkedin" width={20} height={20} />


        </a>
      </div>
    </div>
  );
};

export default SocialIcons;