import "./Home.css";
import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";
import Carousel from "./Carousel";
import Portfolio from "./Portfolio";


const Home = () => {
  const [rotate, setRotate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    <section id="Home" className="min-h-screen pt-25 flex flex-col md:flex-row items-center justify-center px-4 bg-[var(--body)] text-[var(--text)] ">
      
    {/* Profile Picture */}
      <div className="md:w-1/2 flex justify-center">
        <div id="image-container" className={`relative w-80 h-90 rounded-full overflow-hidden shadow-xl border-2 border-blue-50 ${rotate ? "spin-once" : ""}`}>
        <img src={profilePic} alt="Profile" 
             className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
        </div>
      </div>

      {/* About Text */}
      <div className="md:w-1/2 text-center md:text-left mb-5 mt-8 md:mb-0 md:mr-20 md:ml-5">
        <h1 className="text-4xl font-bold mb-4  slide-in-left transition-transform duration-300 hover:scale-102">Hi, I'm Priti 😊</h1>
        <p id="para1" class="text-lg mt-2 mb-4  slide-in-left transition-transform duration-300 hover:scale-102 font-bold text-pink-700" >Aspiring Web Developer | Tech Enthusiast</p>
        <p id="para2" className="text-lg ">
          I'm a frontend developer passionate about clean design and smooth user experience.
          I enjoy building responsive websites using React and Tailwind CSS that not only work well but also feel intuitive to use.
          <br/>
          I’m an enthusiastic web developer and keen observer, who loves noticing details and finding creative solutions to problems.
        </p>


      <div className="flex justify-center items-center md:justify-start p-6 gap-4">
      <a
        href="/About"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        About
      </a>
      <a
        href="/Contact"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        Contact
      </a>
      </div>


      </div>
      </section>
 
    <div className="flex justify-center items-center pt-1 pb-10 mb-6">
      <Portfolio/>
    </div>
    <div className="flex justify-center items-center">
      <Carousel/>
    </div>
    </div>
  );
};

export default Home;