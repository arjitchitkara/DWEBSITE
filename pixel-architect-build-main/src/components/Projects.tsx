
import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "commercial",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1000&h=800",
    year: "2023"
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    category: "residential",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&h=800",
    year: "2022"
  },
  {
    id: 3,
    title: "University Campus",
    category: "institutional",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1562639959-f6f8bbe8abd9?auto=format&fit=crop&w=1000&h=800",
    year: "2021"
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "commercial",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?auto=format&fit=crop&w=1000&h=800",
    year: "2022"
  },
  {
    id: 5,
    title: "Waterfront Apartments",
    category: "residential",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1545324418-013fdb23d5bc?auto=format&fit=crop&w=1000&h=800",
    year: "2023"
  },
  {
    id: 6,
    title: "Hospital Building",
    category: "institutional",
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&h=800",
    year: "2021"
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "commercial", name: "Commercial" },
  { id: "residential", name: "Residential" },
  { id: "institutional", name: "Institutional" }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-construction-dark to-construction-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our <span className="text-construction-accent">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our diverse portfolio of projects that showcase our expertise and innovation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === category.id
                  ? 'border-construction-accent text-construction-accent bg-construction-accent bg-opacity-10'
                  : 'border-construction-border text-gray-400 hover:border-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card cursor-grow"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-80'
                }`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 mb-2 bg-construction-accent bg-opacity-90 text-construction-dark text-xs font-medium uppercase rounded-full">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/projects" className="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
