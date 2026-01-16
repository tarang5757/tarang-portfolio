import React from "react";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-2xl hover:text-gold-400 transition duration-350 ease-in">
        {text}
      </h1>
    </div>
  );
}