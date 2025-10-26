import { Github, ExternalLink, Mail, Linkedin, Download, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

interface VFDContentProps {
  activeSection: string;
}

const projects = [
  {
    title: "E-COMMERCE_STORE",
    description: "Deployed an end to end e-commerce application integrated with payment gateway for a client",
    tech: ["React.js", "Tailwind CSS", "Razorpay"],
    status: "DEPLOYED",
    github: "https://www.iksae.com/",
  },
  {
    title: "GITHUB_ISSUES_RECOMMENDER",
    description: "An ML based app that finds open github issues in full stack projects based on your skills and experience",
    tech: ["C++", "CUDA", "Python", "Docker"],
    status: "BETA",
    github: "https://github.com/sukarxn/github-issues-recommender",
  },
  {
    title: "QUANTUM_SIMULATOR",
    description: "Quantum computing simulation environment for research",
    tech: ["C++", "CUDA", "Python", "Docker"],
    status: "BETA",
    github: "https://github.com/sukarxn/quantum_simulator",
  },
  {
    title: "MATCHMAIT.AI",
    description: "A dating app for college students supporting real-time chat",
    tech: ["Next.js", "Supabase", "Flutter", "Websockets"],
    status: "IN_DEVELOPMENT",
    github: "https://github.com/sukarxn/matchmait",
  }

];

const skills = [
  { category: "LANGUAGES", items: ["JavaScript", "TypeScript", "Python", "Rust", "C++"] },
  { category: "FRAMEWORKS", items: ["React", "Node.js", "FastAPI", "TensorFlow", "Next.js"] },
  { category: "DATABASES", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { category: "TOOLS", items: ["Docker", "AWS", "Git", "Linux", "Kubernetes"] },
];

export default function VFDContent({ activeSection }: VFDContentProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const start = currentPage * projectsPerPage;
    return projects.slice(start, start + projectsPerPage);
  };
  const renderAbout = () => (
    <div className="space-y-6">
      <div>
        <h2 className="vfd-text-bright text-2xl font-mono mb-4 flex items-center gap-2">
          <ChevronRight className="w-5 h-5" />
          ABOUT.SYS
        </h2>
        <div className="vfd-accent-line mb-6"></div>
      </div>
      
      <div className="vfd-text space-y-4 font-mono">
        <div className="text-sm">
          <span className="vfd-text-dim">&gt; </span>
          INITIALIZING USER PROFILE...
        </div>
        
        <div className="bg-secondary/20 border border-primary/20 p-4 space-y-3">
          <div className="vfd-text-bright text-lg">SUKARAN_GULATI</div>
          <div className="vfd-text-dim text-sm">
            CLASSIFICATION: FULL_STACK_DEVELOPER
            <br />
            SPECIALIZATION: AGENTIC_AI | WEB_APPLICATIONS
          </div>
        </div>

        {/* GitHub Contribution Chart */}
        <div className="bg-secondary/20 border border-primary/20 p-4 space-y-3">
          <img
            src="https://ghchart.rshah.org/sukarxn"
            alt="sukarxn's GitHub contribution chart"
            className=" rounded-lg github-chart-dark"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        
        <p className="leading-relaxed">
          I build scalable applications that solve 
          real-world problems, with expertise in modern JavaScript frameworks, 
          machine learning, and cloud architecture. I also build applications leveraring 
          generative AI.
        </p>
        
        <p className="leading-relaxed">
          When not coding, I contribute to open-source projects, write technical 
          articles, and explore the latest developments in quantum computing and 
          blockchain technology.
        </p>
      </div>
    </div>
  );

  const renderProjects = () => {
    const currentProjects = getCurrentProjects();
    
    return (
      <div className="space-y-6">
        <div>
          <h2 className="vfd-text-bright text-2xl font-mono mb-4 flex items-center gap-2">
            <ChevronRight className="w-5 h-5" />
            PROJECTS.EXE
          </h2>
          <div className="vfd-accent-line mb-6"></div>
        </div>
        <div className="space-y-4">
          {currentProjects.map((project, index) => {
            const cardContent = (
              <div className="bg-secondary/20 border border-primary/20 p-4 hover:border-primary/40 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="vfd-text-bright font-mono text-lg">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 border font-mono ${
                    project.status === 'OPERATIONAL' ? 'text-accent border-accent/50' :
                    project.status === 'DEPLOYED' ? 'text-primary border-primary/50' :
                    'text-yellow-400 border-yellow-400/50'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="vfd-text text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="vfd-text-dim text-xs px-2 py-1 bg-muted/30 border border-muted font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vfd-button text-xs px-3 py-1 flex items-center gap-1"
                  >
                    <Github className="w-3 h-3" />
                    CODE
                  </a>
                  {/* You can add a DEMO link here if available in the future */}
                </div>
              </div>
            );
            return project.github ? (
              <a
                key={currentPage * projectsPerPage + index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {cardContent}
              </a>
            ) : (
              <div key={currentPage * projectsPerPage + index}>{cardContent}</div>
            );
          })}
          {/* Navigation */}
          <div className="flex items-center justify-between p-4 bg-secondary/20 border border-primary/20">
            <button 
              onClick={prevPage}
              className="vfd-button text-xs px-3 py-2 flex items-center gap-2"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
              PREV
            </button>
            <div className="vfd-text-dim text-xs font-mono">
              PAGE {currentPage + 1} OF {totalPages}
            </div>
            <button 
              onClick={nextPage}
              className="vfd-button text-xs px-3 py-2 flex items-center gap-2"
              disabled={totalPages <= 1}
            >
              NEXT
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderSkills = () => (
    <div className="space-y-6">
      <div>
        <h2 className="vfd-text-bright text-2xl font-mono mb-4 flex items-center gap-2">
          <ChevronRight className="w-5 h-5" />
          SKILLS.DAT
        </h2>
        <div className="vfd-accent-line mb-6"></div>
      </div>
      
      <div className="space-y-4">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-secondary/20 border border-primary/20 p-4">
            <h3 className="vfd-text-bright font-mono text-sm mb-3">{skillGroup.category}:</h3>
            <div className="grid grid-cols-2 gap-2">
              {skillGroup.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2 vfd-text text-sm font-mono">
                  <span className="w-1 h-1 bg-primary rounded-full animate-glow-pulse"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <div>
        <h2 className="vfd-text-bright text-2xl font-mono mb-4 flex items-center gap-2">
          <ChevronRight className="w-5 h-5" />
          CONTACT.CMD
        </h2>
        <div className="vfd-accent-line mb-6"></div>
      </div>
      
      <div className="space-y-4">
        <div className="vfd-text-dim text-sm font-mono">
          &gt; ESTABLISHING COMMUNICATION CHANNELS...
          <br />
          &gt; READY FOR TRANSMISSION
        </div>
        
        <div className="space-y-3">
          <button className="vfd-button w-full text-left flex items-center gap-3 p-4">
            <Mail className="w-5 h-5" />
            <div>
              <div className="font-mono text-sm">EMAIL.PROTOCOL</div>
              <div className="vfd-text-dim text-xs">john.doe@example.com</div>
            </div>
          </button>
          
          <button className="vfd-button w-full text-left flex items-center gap-3 p-4">
            <Linkedin className="w-5 h-5" />
            <div>
              <div className="font-mono text-sm">LINKEDIN.NETWORK</div>
              <div className="vfd-text-dim text-xs">linkedin.com/in/johndoe</div>
            </div>
          </button>
          
          <button className="vfd-button w-full text-left flex items-center gap-3 p-4">
            <Github className="w-5 h-5" />
            <div>
              <div className="font-mono text-sm">GITHUB.REPOSITORY</div>
              <div className="vfd-text-dim text-xs">github.com/johndoe</div>
            </div>
          </button>
          
          <button className="vfd-button w-full text-left flex items-center gap-3 p-4">
            <Download className="w-5 h-5" />
            <div>
              <div className="font-mono text-sm">RESUME.PDF</div>
              <div className="vfd-text-dim text-xs">Download full CV</div>
            </div>
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-secondary/20 border border-primary/20">
          <div className="vfd-text-bright font-mono text-sm mb-2">AVAILABILITY_STATUS:</div>
          <div className="vfd-text text-sm">
            Currently open to new opportunities and interesting projects.
            <br />
            Response time: &lt; 24 hours
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 vfd-panel p-8 scan-lines">
      <div className="max-w-4xl">
        {activeSection === "about" && renderAbout()}
        {activeSection === "projects" && renderProjects()}
        {activeSection === "skills" && renderSkills()}
        {activeSection === "contact" && renderContact()}
      </div>
    </div>
  );
}
