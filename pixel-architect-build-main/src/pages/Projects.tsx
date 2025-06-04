
import { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: "all", name: "All Projects" },
  { id: "commercial", name: "Commercial" },
  { id: "residential", name: "Residential" },
  { id: "institutional", name: "Institutional" }
];

const projectsData = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "commercial",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1000&h=800",
    year: "2023",
    description: "A cutting-edge office complex featuring open workspaces, collaborative zones, and state-of-the-art technology integration. The design prioritizes sustainability with energy-efficient systems throughout.",
    client: "NYC Development Corp.",
    size: "120,000 sq ft",
    services: ["Architectural Design", "Construction Management", "Interior Design"]
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    category: "residential",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&h=800",
    year: "2022",
    description: "An exclusive residential tower with premium amenities including infinity pools, private terraces, and panoramic ocean views. Every unit features high-end finishes and smart home technology.",
    client: "Coastal Living Developments",
    size: "85,000 sq ft",
    services: ["Architectural Design", "Interior Design", "Landscape Architecture"]
  },
  {
    id: 3,
    title: "University Campus",
    category: "institutional",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1562639959-f6f8bbe8abd9?auto=format&fit=crop&w=1000&h=800",
    year: "2021",
    description: "A comprehensive campus redevelopment project featuring modernized classrooms, research facilities, and student spaces. The design blends historical elements with contemporary educational needs.",
    client: "Eastern University",
    size: "250,000 sq ft",
    services: ["Master Planning", "Architectural Design", "Landscape Architecture"]
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "commercial",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?auto=format&fit=crop&w=1000&h=800",
    year: "2022",
    description: "A multi-level shopping destination with innovative spatial design maximizing retail visibility and customer flow. Features include skylit atriums, interactive displays, and integrated dining options.",
    client: "Midwest Retail Group",
    size: "180,000 sq ft",
    services: ["Architectural Design", "Interior Design", "Engineering Services"]
  },
  {
    id: 5,
    title: "Waterfront Apartments",
    category: "residential",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1545324418-013fdb23d5bc?auto=format&fit=crop&w=1000&h=800",
    year: "2023",
    description: "Luxurious waterfront residences designed to maximize views while providing privacy. Features include private boat slips, rooftop gardens, and sustainable building systems throughout.",
    client: "Pacific Northwest Properties",
    size: "95,000 sq ft",
    services: ["Architectural Design", "Engineering Consultation", "Interior Design"]
  },
  {
    id: 6,
    title: "Hospital Building",
    category: "institutional",
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&h=800",
    year: "2021",
    description: "A patient-centered healthcare facility designed for both efficiency and comfort. Features include advanced medical technology implementation, healing gardens, and natural light optimization.",
    client: "Southwest Healthcare Network",
    size: "210,000 sq ft",
    services: ["Healthcare Architecture", "Engineering Services", "Construction Management"]
  }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Projects - Chitkara Constructions";
  }, []);

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-construction-dark">
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="noise-bg"></div>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-xl text-white mb-8">Our <span className="text-construction-accent">Projects</span></h1>
            <p className="text-gray-300 text-lg">
              Explore our diverse portfolio of completed projects across various sectors
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
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
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
                
                <div className="p-6 bg-construction-muted border-t border-construction-border">
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                  <button className="inline-flex items-center text-construction-accent text-sm hover:underline">
                    View details <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Project Detail Modal - Could be expanded with shadcn Dialog in a real implementation */}
    </div>
  );
};

export default ProjectsPage;
