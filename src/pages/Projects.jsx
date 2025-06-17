import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Eatsome",
    category: "MERN",
    image: "chiya.webp",
    demo: "https://chiya-khasauli.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Site",
    category: "React",
    image: "chiya.webp",
    demo: "https://chiya-khasauli.vercel.app/",
  },
  {
    id: 3,
    title: "Blog Platform",
    category: "NextJs",
    image: "chiya.webp",
    demo: "https://chiya-khasauli.vercel.app/",
  },
  {
    id: 4,
    title: "Booking App",
    category: "Php",
    image: "chiya.webp",
    demo: "https://chiya-khasauli.vercel.app/",
  },
];

const categories = ["All", "React", "NextJs", "MERN", "Php"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="w-full min-h-screen bg-gray-200 py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest border-y-4 inline-block py-2 px-6 mb-12">
          PROJECTS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 border-b-2 ${
                active === cat
                  ? "border-black font-semibold"
                  : "border-transparent text-gray-500"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-4 py-1 text-sm bg-white text-black rounded hover:bg-gray-300">
                        DEMO
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-700 font-medium">
          And many more to come!
        </p>
      </div>
    </section>
  );
}
