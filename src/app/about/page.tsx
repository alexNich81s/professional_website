import { Navigation } from "../components/navigation";

export default function About(){
    return (
        <main className="min-h-screen bg-black text-white px-6 py-16 font-mono">
            <Navigation />
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Profile Image */}
          

          {/* Bio */}
          <div>
            <p className="text-gray-300 mb-4">
              Hey there! I'm <span className="text-cyan-400 font-semibold">Ethan Nichols</span>, a passionate software developer who loves building clean, efficient, and impactful web applications.
            </p>
            
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Tech Stack</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </main>
    )
}