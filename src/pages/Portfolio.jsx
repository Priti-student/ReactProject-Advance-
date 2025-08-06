import React from 'react'

import { useState } from "react";

const projects = [
  {
    id: 1,
    img:`/clone.jpg`,
    title: "Zairzest 4.0 Clone",
    shortDesc: "A clone of Zairzest 4.0 website built with modern frontend tools.",
    details:
      "This project replicates the Zairzest 4.0 event website design using HTML,CSS,JS. It focuses on responsive UI, smooth navigation, and a clean, professional layout.",
    github: "https://github.com/Subhashree4307/TechSquad-Zaizest",
    live: "https://techsquad-zairzest.netlify.app/"
  },
  {
    id: 2,
    img:`/chatbot.jpg`,
    title: "AI Chatbot",
    shortDesc: "A chatbot with conversation memory built on Google Colab.",
    details:
      "This AI Chatbot is built using Chainlit and Langchain with conversation memory, deployed via ngrok for web access. It answers user queries based on a trained dataset and simulates a real assistant experience.",
    github: "https://colab.research.google.com/drive/1Pbzuga8UCcMYRads40wAkmMc1DhexCeV?usp=sharing",
    live: "https://5798167b8ffa.ngrok-free.app/"
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="bg-[var(--body)] text-black pt-25 px-6">
      <h2 className="text-4xl text-[var(--text)] font-bold text-center mb-12">My Projects</h2>

      {/* Cards Grid */}
      <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pb-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--card-bg)] p-6 rounded-xl shadow-md hover:shadow-2xl transition cursor-pointer"
            onClick={() => setSelected(project)}
          >

            <div className="flex justify-center items-center rounded-xl bg-[var(--bg)] ">
                <div className="h-60 w-60 pr-2 pl-2 rounded-full flex justify-center items-center">
                    <img src={project.img} alt="image" className="h-50 w-50 rounded-full"/>
                </div>  
            </div>
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.shortDesc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selected.details}</p>
            <div className="flex gap-4">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
                >
                  SourceCode
                </a>
              )}
              {selected.live && (
                <a
                  href={selected.live}
                  target="_blank"
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

