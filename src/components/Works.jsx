import React from "react";

function Works() {
  return (
    <div className="mb-10 p-12">
      <div className="flex flex-col items-center">
        <div className="pt-2 pb-5 flex flex-col items-center">
          <h2 className="font-bebas text-4xl font-bold">Works</h2>
          <p>Collections of works in Behance</p>
        </div>

        <div className="p-2 w-full grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          <iframe
            className="w-full"
            src="https://www.behance.net/embed/project/121849293?ilo0=1"
            height="316"
            // width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="w-full"
            src="https://www.behance.net/embed/project/142218297?ilo0=1"
            height="316"
            // width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="w-full"
            src="https://www.behance.net/embed/project/142467275?ilo0=1"
            height="316"
            // width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="w-full"
            src="https://www.behance.net/embed/project/122624105?ilo0=1"
            height="316"
            // width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Works;
