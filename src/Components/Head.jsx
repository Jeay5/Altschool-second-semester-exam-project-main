import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Head = () => {
  return (
    <>
      <div className="p-6 ">
        <div className="typing-demo">
          <p className="text-2x1 mt-8 mb-8 md:text-6xl lg:text-4xl">
            I am Igbinidu Jeremiah, a Frontend Developer with 1 year experience
            proficiently building software with in frontend
            technologies with Javascript, React.js. im in view of learning 
            Next.js, Redux, Bootstrap, Tailwind CSS and others. I am gladly 
            working on myself to improve my skills and I also love learning
            new technologies!
          </p>

          <div className="mt-8">
            <Link
              className="t-[200px] hover:cursor-pointer rounded-xl  border-2 border-yellow-500 p-2 hover:bg-yellow-400 hover:text-white hover:border-2  text-2xl"
              target="_blank"
              to="https://vercel.com/igbinidu-jeremiahs-projects"
            >
              Résumé
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
