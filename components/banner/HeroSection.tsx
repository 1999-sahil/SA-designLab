
import React from "react";

function HeroSection() {
  return (
    <div id="heroSection" className="flex justify-center max-w-screen-xl w-full">
      {/** heading tag */}
      <div className="max-w-2xl mx-10 m-auto gridLinesBackground pt-2">
        <h2 className="text-3xl sm:text-5xl text-center font-montserrat font-black text-zinc-900 dark:text-zinc-100">
          <span className="text-[#FF6700]">Craft</span> Digital <span className="text-[#5ffb17]">Naratives</span> with <span className="text-sky-600">Artistic</span> Precision
        </h2>
      </div>
    </div>
  )
}

export default HeroSection
