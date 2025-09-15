import React from "react";

const featuredPosts = [
  {
    title: "Learning React in 2025",
    description: "Tips and tricks for mastering React quickly and effectively.",
    button: "Read More",
  },
  {
    title: "Tailwind CSS for Modern UI",
    description:
      "How to build beautiful, responsive interfaces using Tailwind CSS.",
    button: "Read More",
  },
  {
    title: "JavaScript Best Practices",
    description:
      "Write clean and maintainable code with these JS best practices.",
    button: "Read More",
  },
];

function Content2() {
  return (
    <section className="relative pt-24 pb-16 ">
      {/* Overlay blur for readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-firaSans sm:text-4xl font-bold text-gray-700 mb-8 text-center">
          Featured Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-[1.001] hover:shadow-xl"
            >
              <h3 className="text-2xl font-firaSans font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700  text-lg font-libertinus font-bold mb-4">
                {post.description}
              </p>
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

export default Content2;
