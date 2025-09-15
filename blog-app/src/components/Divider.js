import React from "react";

function Divider() {
  return (
    <div className="w-full flex justify-center my-16">
      <div className="relative w-full max-w-4xl h-1 overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 animate-gradient-x"></div>

        <style jsx>{`
          @keyframes gradient-x {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient-x {
            background-size: 200% 100%;
            animation: gradient-x 5s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Divider;
