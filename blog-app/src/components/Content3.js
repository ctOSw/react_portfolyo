import React from "react";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    excerpt:
      "Learn how to use useState, useEffect, and custom hooks effectively.",
    author: "Arda",
    date: "August 31, 2025",
    button: "Read More",
  },
  {
    title: "Tailwind CSS Tips",
    excerpt: "Build responsive and modern UI quickly with Tailwind CSS.",
    author: "Arda",
    date: "August 28, 2025",
    button: "Read More",
  },
  {
    title: "JavaScript ES2025 Features",
    excerpt: "Explore the newest JavaScript features and improve your code.",
    author: "Arda",
    date: "August 25, 2025",
    button: "Read More",
  },
  {
    title: "Building a Portfolio Website",
    excerpt:
      "Step by step guide to build your own portfolio with React and Tailwind.",
    author: "Arda",
    date: "August 22, 2025",
    button: "Read More",
  },
];

function Content3() {
  return (
    <section className="relative pt-24 pb-16 ">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-firaSans sm:text-4xl font-bold text-gray-700 mb-8 text-center">
          Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-[1.001] hover:shadow-xl"
            >
              <h3 className="text-2xl font-firaSans font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 text-lg font-libertinus font-bold mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                {post.author} • {post.date}
              </div>
              <button className="bg-blue-500 font-firaSans text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                {post.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content3;
