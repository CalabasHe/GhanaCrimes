import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-EB">
          <span className="inline-block animate-bounce text-[#f06c00]">G</span>
          <span className="inline-block animate-bounce delay-75 text-[#f06c00]">
            h
          </span>
          <span className="inline-block animate-bounce delay-100 text-[#f06c00]">
            a
          </span>
          <span className="inline-block animate-bounce delay-150 text-[#f06c00]">
            n
          </span>
          <span className="inline-block animate-bounce delay-200 text-[#f06c00]">
            a
          </span>

          <span className="inline-block animate-bounce delay-300 text-[#f06c00]">
            C
          </span>
          <span className="inline-block animate-bounce delay-400 text-[#f06c00]">
            r
          </span>
          <span className="inline-block animate-bounce delay-500 text-[#f06c00]">
            i
          </span>
          <span className="inline-block animate-bounce delay-600 text-[#f06c00]">
            m
          </span>
          <span className="inline-block animate-bounce delay-700 text-[#f06c00]">
            e
          </span>
          <span className="inline-block animate-bounce delay-800 text-[#f06c00]">
            s
          </span>
        </h1>
        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-[#f06c00] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
