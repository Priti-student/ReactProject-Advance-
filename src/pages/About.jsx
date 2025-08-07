import React from "react";
import {Link} from "react-router-dom";
import profilePic from "../assets/profilepic.jpg";

export default function About() {
  return (
    <div className="min-h-screen pt-25 p-10 bg-gradient-to-b from-[var(--about-first)] to-[var(--about-second)] text-[var(--pic-border)] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-[var(--text-second)] text-center max-w-2xl mb-12">
        Hi! I'm Priti, a passionate Web Developer and AI Enthusiast. I love
        building modern, responsive websites and exploring the world of Machine
        Learning. This project is a step towards my journey in creating
        real-world applications.
      </p>
      <img
        src={profilePic}
        alt="Profile"
        className="w-45 h-45 rounded-full border-4 border-[var(--pic-border)] shadow-lg mb-5 hover:scale-105 hover:border-none"
      />
      <p className="text-[var(--text-second)] text-center max-w-2xl mb-5">
        I’m a passionate learner and aspiring software developer. I
        completed my 10th from Odisha Adarsha Vidyalaya(OAV) with a strong interest in Science and IT, and later
        pursued 12th from Iconic OAV, which helped me build a curiosity for
        technology from a different perspective.
        <br/>
        <br/>
        Currently, I am pursuing B.Tech
        in Computer Science from OUTR,Bhubaneswar and actively exploring the
        fields of Artificial Intelligence, Web Development, and Deep Learning. I
        enjoy creating projects that combine creativity and problem-solving, and
        I am continuously learning new tools and technologies to enhance my
        skills. 
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-gray-700 p-4 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-yellow-400">React</h3>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-yellow-400">Tailwind</h3>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-yellow-400">JavaScript</h3>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-yellow-400">GitHub</h3>
        </div>
      </div>

      <Link
        to="/Contact"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        Contact
      </Link>
    </div>
  );
}
