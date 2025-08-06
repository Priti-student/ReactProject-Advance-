import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-[var(--body)] py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-2">My Portfolio</h2>
          <p className="text-[var(--footer-text)] text-sm">
            Exploring AI, Web Development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-pink-700 mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/portfolio" className="hover:text-yellow-400">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-pink-700 mb-3">Connect</h2>
          <div className="flex gap-6 mt-6 text-4xl pb-10 ">
                <a href="https://www.linkedin.com/in/priti-ram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-600 transition duration-300" />
                </a>
                <a href="https://www.instagram.com/pretty__priti____/profilecard/?igsh=NzNlaDVzemlpYmlj" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-500 transition duration-300" />
                </a>
                <a href="https://github.com/Priti-student" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-gray-800 transition duration-300" />
                </a>
              </div>
        </div>

      </div>

      <div className="text-center text-[var(--footer-text)] text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MySite | All Rights Reserved
      </div>
    </footer>
  );
}