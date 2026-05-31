import { motion } from 'framer-motion';
import { Calendar, Code, ExternalLink } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'Steam Tipzz (Major Project)',
    period: '2026 – Present',
    type: 'Full Stack SaaS Platform',
    description: [
      'Developed a full-stack SaaS platform using React.js, Node.js, Express.js, and MongoDB.',
      'Implemented secure authentication and user management.',
      'Built automation workflows for lead generation and customer engagement.',
      'Created analytics dashboards and optimized application performance.',
      'Designed a modern responsive UI with excellent user experience.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/Classicharsh',
    live: '#'
  },
  {
    title: 'Gen AI Automation Platform',
    period: '2026',
    type: 'AI Automation platform',
    description: [
      'Built AI-powered automation workflows using Gemini/OpenAI APIs.',
      'Implemented prompt engineering systems and intelligent chat features.',
      'Automated content generation and business processes.',
      'Integrated AI-based task execution and workflow management.'
    ],
    technologies: ['Python', 'Gemini API', 'OpenAI API', 'Automation', 'Prompt Engineering'],
    github: 'https://github.com/Classicharsh',
    live: '#'
  },
  {
    title: 'Meta Ads Automation System',
    period: '2026',
    type: 'Marketing Automation',
    description: [
      'Developed automation workflows for Meta Ads campaign management.',
      'Created automated reporting and analytics dashboards.',
      'Integrated lead collection and follow-up automation.',
      'Improved campaign monitoring and marketing efficiency.'
    ],
    technologies: ['Meta Ads API', 'JavaScript', 'Automation', 'Analytics'],
    github: 'https://github.com/Classicharsh',
    live: '#'
  },
  {
    title: 'WhatsApp Clone',
    period: '2025 – 2026',
    type: 'Real-time Chat App',
    description: [
      'Built a real-time chat application using React, Node.js, MongoDB, and Firebase.',
      'Implemented secure authentication and real-time messaging.',
      'Designed a responsive UI inspired by WhatsApp.',
      'Integrated Firebase Authentication and MongoDB backend.'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
    github: 'https://github.com/Classicharsh',
    live: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0 mb-12 last:mb-0"
              >
                <div className="md:flex items-center justify-between flex-row-reverse group">
                  {/* Timeline Line (Mobile) */}
                  <div className="md:hidden absolute left-0 top-0 bottom-[-3rem] w-px bg-zinc-800 last:bottom-0"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-secondary z-10 group-hover:scale-150 transition-transform"></div>

                  {/* Right Side: Title & Subtitle (Desktop Right / Mobile Left) */}
                  <div className="md:w-5/12 mb-4 md:mb-0 pl-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Code size={16} />
                      <span className="font-medium">{project.type}</span>
                    </div>
                  </div>

                  {/* Timeline Line (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-zinc-800 last:bottom-0"></div>

                  {/* Left Side: Period, Bullet Points, Badges & Buttons (Desktop Left / Mobile Left) */}
                  <div className="md:w-5/12 md:text-right pr-4">
                    <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm md:justify-end">
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                    
                    {/* Bullet Points */}
                    <ul className="text-gray-400 text-sm space-y-1 mb-4 list-none">
                      {project.description.map((point, i) => (
                        <li key={i} className="relative md:pr-0">
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4 md:justify-end">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] md:text-xs px-2.5 py-0.5 bg-zinc-800 text-primary border border-zinc-700/50 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2.5 md:justify-end">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-zinc-700 hover:border-primary hover:text-primary bg-secondary/30 transition-all text-white"
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-primary hover:bg-primary/90 transition-all text-black"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
