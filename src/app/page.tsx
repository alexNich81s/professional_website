'use client'
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image";
import { Navigation } from "./components/navigation"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <div>
          <Navigation />
        </div>
      <main className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] to-[#1a1a1a] text-white flex items-center justify-center px-6 font-mono">
       
        <div className="max-w-4xl w-full text-center py-12">
        

          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 tracking-tight">
            Welcome to my website! 
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 tracking-tight">
            My Name is Ethan.
          </h1>
          <h3 className="text-2xl text-gray-300 font-semibold mb-1">
            I am a
          </h3>
          <p className="text-xl text-gray-400 mb-6">
          <Typewriter
            words={['Software Developer', 'Tech Enthusiast', 'Problem Solver']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Building fast, scalable, and beautiful web apps with Next.js, React, and modern cloud tooling.
          </p>

          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold text-black transition"
            >
              View My Work
            </Link>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
              target="_blank" rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div> */}
        </div>
      </main>
    </div>
  );
}
