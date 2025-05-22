"use client"
import Link from "next/link"
import { Navigation } from "../components/navigation"
export default function Portfolio() {
   
        const projects = [
            { title: 'Example Project 1', href: '/portfolio/project1' },
            { title: 'Youtube Search', href: 'https://phenomenal-fudge-fe3934.netlify.app/' },
            { title: 'Simple Calculator', href: 'https://resilient-queijadas-23e832.netlify.app/' },
          ]
        
          return (
            <main className="min-h-screen bg-black text-white px-6 py-16 font-mono">
            <Navigation />
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">
                  My Portfolio
                </h1>
        
                <div className="grid gap-6 sm:grid-cols-2">
                  {projects.map((project, index) => (
                    <Link key={index} href={project.href}>
                      <div className="p-6 border border-cyan-500 rounded-xl hover:bg-cyan-600 hover:text-black transition cursor-pointer shadow-lg">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-400 mt-2">
                          Click to view details →
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </main>
          )
}