import React from "react";

function Intro() {
  return (
    <div className="flex items-center jusify-center flex-col text-center pt-20 pb-12">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Martin Dimmen
      </h1>
      <p className="test-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Check out my Linkedin{" "}
        <a
          href="https://www.linkedin.com/in/martin-dimmen-2448b2209/"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-1 decoration-1 decoration-blue-500"
          rel="norefferrer noopener"
        >
          Martin Dimmen
        </a>
      </p>
    </div>
  );
}

export default Intro;
