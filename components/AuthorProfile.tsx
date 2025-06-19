"use client";

import { useState } from "react";
import AuthorModal from "./AuthorModal";

interface AuthorProfileProps {
  author: string;
  size?: "small" | "large";
  showModal?: boolean;
}

const authors = {
  "Antoine Marin": {
    name: "Antoine Marin",
    bio: "Crypto analyst and DeFi specialist with expertise in blockchain technology and market trends.",
    avatar: "/images/articles/antoine-marin.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/antoinemarin7/",
      twitter: "",
      website: "",
    },
  },
};

export default function AuthorProfile({
  author,
  size = "small",
  showModal = true,
}: AuthorProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authorData = authors[author as keyof typeof authors];

  if (!authorData) {
    return <span className="text-gray-600">{author}</span>;
  }

  const handleAuthorClick = () => {
    if (showModal) {
      setIsModalOpen(true);
    }
  };

  if (size === "small") {
    return (
      <>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAuthorClick}
            className={`font-semibold text-gray-900 ${
              showModal ? "hover:text-blue-600 cursor-pointer underline" : ""
            } transition-colors`}
          >
            {authorData.name}
          </button>
        </div>

        {showModal && (
          <AuthorModal
            author={author}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </>
    );
  }

  // Large size for article pages
  return (
    <>
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
        <div className="mb-4">
          <img
            src={authorData.avatar}
            alt={authorData.name}
            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-blue-200"
          />
          <button
            onClick={handleAuthorClick}
            className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer underline transition-colors"
          >
            {authorData.name}
          </button>
          <p className="text-gray-600 text-sm">{authorData.bio}</p>
        </div>
      </div>

      {showModal && (
        <AuthorModal
          author={author}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
