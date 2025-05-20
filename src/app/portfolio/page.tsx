"use client"
import Link from "next/link"
import { Navigation } from "../components/navigation"
export default function Portfolio() {
   /*  return (
        <main>
        <h1>My Portfolio</h1>

        <div className="grid gap-5 sm:grid-cols-2">
            <div className=" box-content md:border ">
            
            Example Project 1
        
                    
            </div>
            <div className=" box-content md:border ">
                
                    Example Project 3
                
                
            </div>
            <div className=" box-content md:border ">
                
                    Example Project 3
                
                
            </div>
        </div>
        
        </main>
    ) */
        const projects = [
            { title: 'Example Project 1', href: '/portfolio/project1' },
            { title: 'Example Project 2', href: '/portfolio/project2' },
            { title: 'Example Project 3', href: '/portfolio/project3' },
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