import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Code, 
  Sparkles, 
  Mic, 
  Code2, 
  Cpu, 
  Brain,
  ShieldCheck,
  Smartphone,
  Layers,
  Activity,
  CheckCircle2,
  Lock,
  Globe,
  DollarSign
} from 'lucide-react';
import Counter from './Counter';

// --- Technology Icons ---
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-3.5 h-3.5 fill-none stroke-[#61DAFB] animate-[spin_20s_linear_infinite]" strokeWidth="1.2">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#5FA04E]">
    <path d="M12.248.067C11.927.067 11.607.15 11.326.313l-9.083 5.242c-.57.329-.922.945-.922 1.604v10.15c0 .659.353 1.275.922 1.603l9.083 5.242c.557.315 1.296.315 1.848 0l9.083-5.242c.57-.329.924-.945.924-1.603V7.159c0-.659-.354-1.275-.924-1.604l-9.083-5.242c-.281-.163-.6-.247-.926-.247zm-9.173 6.613c.085-.046.197-.046.272 0l9.083 5.242c.085.046.137.138.137.235V22.31c0 .096-.052.192-.137.242l-9.083-5.242c-.085-.046-.137-.138-.137-.235V6.921c0-.096.052-.192.137-.242l-.009.001zm18.346 0c.085.046.137.138.137.242v15.242c0 .097-.052.189-.137.235l-9.083 5.242c-.085.045-.197.045-.272 0l-9.083-5.242c-.085-.046-.137-.138-.137-.235V7.159c0-.097.052-.189.137-.235l9.083-5.242c.085-.046.197-.046.272 0l9.083 5.242z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#47A248]">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
  </svg>
);

const SocketIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white stroke-black" strokeWidth="0.5">
    <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm0 21.818A9.818 9.818 0 1 1 21.818 12 9.83 9.83 0 0 1 12 21.818zm1.09-14.727L7.636 12.545h3.819L10.91 16.91l5.454-5.454H12.545z" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#3776AB]">
    <path d="M11.998 0C5.372 0 5.647 2.87 5.647 2.87l.006 2.978H12v.42H3.725S0 5.86 0 12.001c0 6.14 3.266 5.871 3.266 5.871h1.961v-2.738s-.051-3.266 3.203-3.266h3.636V9.066H17.47s2.518-.088 2.518-2.522c0-2.434-2.235-3.674-2.235-3.674s-1.854-2.87-5.755-2.87zM8.566 2.05a.735.735 0 1 1 0 1.47.735.735 0 0 1 0-1.47zM12.002 24c6.626 0 6.351-2.87 6.351-2.87l-.006-2.978H12v-.42h8.275s3.725.408 3.725-5.732c0-6.14-3.266-5.871-3.266-5.871h-1.961v2.738s.051 3.266-3.203 3.266h-3.636v2.802H6.53s-2.518.088-2.518 2.522c0 2.434 2.235 3.674 2.235 3.674s1.854 2.87 5.755 2.87zm3.432-2.05a.735.735 0 1 1 0-1.47.735.735 0 0 1 0 1.47z"/>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#F7DF1E] rounded-sm">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
);

const GithubIcon = ({ size = 16, ...props }) => (
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

const getTagIcon = (tag) => {
  switch (tag.toLowerCase()) {
    case 'react':
    case 'react.js':
      return <ReactIcon />;
    case 'node.js':
      return <NodeIcon />;
    case 'mongodb':
      return <MongoIcon />;
    case 'socket.io':
      return <SocketIcon />;
    case 'python':
      return <PythonIcon />;
    case 'javascript':
      return <JSIcon />;
    case 'ai/ml':
      return <Brain size={13} className="text-[#A855F7]" />;
    case 'web speech api':
      return <Mic size={13} className="text-[#3B82F6]" />;
    case 'tailwind css':
      return <Code2 size={13} className="text-[#06B6D4]" />;
    case 'firebase auth':
    case 'firebase':
      return <Lock size={13} className="text-[#FFCA28]" />;
    case 'vercel':
    case 'render':
      return <Globe size={13} className="text-[#10B981]" />;
    case 'framer motion':
      return <Sparkles size={13} className="text-[#EC4899]" />;
    case 'gemini api':
      return <Sparkles size={13} className="text-[#A855F7]" />;
    case 'openai api':
      return <Cpu size={13} className="text-[#00A24A]" />;
    case 'ai automation':
      return <Brain size={13} className="text-[#3B82F6]" />;
    default:
      return <Cpu size={13} className="text-[#10B981]" />;
  }
};

const projects = [
  {
    title: 'WhatsApp Clone',
    description: 'A fully functional messaging application inspired by WhatsApp. Features real-time messaging, user authentication, and responsive design.',
    image: '/whatsapp_clone_new.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: '#',
    live: '#',
    isRGB: true
  },
  {
    title: 'AI Resume Screening System',
    description: 'An intelligent system that leverages AI to parse and screen resumes, helping recruiters quickly identify the best candidates based on job descriptions.',
    image: '/ai_resume_screening.jpg',
    tags: ['React', 'Python', 'AI/ML'],
    github: '#',
    live: '#'
  },
  {
    title: 'NeuroChat AI Voice Assistant',
    description: 'An intelligent voice assistant that understands your voice, answers questions, and automates tasks with Gemini and OpenAI API integrations.',
    image: '/voice_assistant_banner.jpg',
    tags: ['Python', 'Gemini API', 'OpenAI API', 'AI Automation'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  const [activeAlert, setActiveAlert] = useState(0);

  const alerts = [
    { name: 'Rohit Sharma', amount: '₹500', message: 'Great stream! Keep it up bro! 🔥', platform: 'youtube' },
    { name: 'NehaXP', amount: '$10', message: 'Love your streams! 💜', platform: 'twitch' },
    { name: 'Piyush Patel', amount: '₹100', message: 'Super chat! 🚀', platform: 'youtube' },
    { name: 'Anjali Verma', amount: '₹200', message: 'Insane gameplay! 👑', platform: 'twitch' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % alerts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Projects</span>
          </h2>

          {/* WaveTipz Flagship Project Showcase */}
          <div className="mb-16">
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="featured-glow-border bg-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden p-6 md:p-10 relative flex flex-col lg:flex-row gap-8 lg:gap-12 cursor-pointer transition-colors duration-300"
            >
              {/* Ambient inner card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/5 pointer-events-none" />

              {/* Left side: Visual representation / mockup & Stats */}
              <div className="flex-1 flex flex-col justify-between z-10">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <Sparkles size={12} />
                    Featured Project
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">WaveTipz</h3>
                  <p className="text-lg text-primary font-medium mb-4">Empowering Creators Through Direct Fan Support</p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    WaveTipz is a modern creator-support platform designed to help YouTubers, streamers, and digital creators receive direct donations from their audience. The platform provides a seamless and secure way for fans to support their favorite creators while enabling creators to build stronger relationships with their community.
                  </p>
                </div>

                {/* Statistics Grid with Animated Counters */}
                <div className="grid grid-cols-3 gap-4 bg-black/40 p-4 rounded-xl border border-zinc-800/80 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Total Tips</p>
                    <p className="text-lg md:text-xl text-primary font-bold tracking-tight">
                      <Counter to="1248" suffix="+" />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Supporters</p>
                    <p className="text-lg md:text-xl text-white font-bold tracking-tight">
                      <Counter to="842" suffix="+" />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Today's Earning</p>
                    <p className="text-lg md:text-xl text-emerald-400 font-bold tracking-tight">
                      $<Counter to="6320" />
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/Classicharsh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 hover:border-primary hover:text-primary bg-zinc-900/50 text-white font-medium text-sm transition-all duration-300"
                  >
                    <GithubIcon size={16} />
                    GitHub Code
                  </a>
                  <a 
                    href="https://www.thewavetips.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/95 text-black font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/20"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Right side: Image, Tech tags & contributions */}
              <div className="flex-1 flex flex-col justify-between gap-6 z-10">
                {/* Main Visual Image mockup or placeholder */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-800/80 group h-52 sm:h-64 shadow-2xl">
                  {/* Simulated Live Alert Banner Overlay */}
                  <div className="absolute top-4 left-4 right-4 z-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeAlert}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-black/90 backdrop-blur-md border border-zinc-800/80 shadow-xl"
                      >
                        <span className="flex h-2.5 w-2.5 relative shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                        </span>
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-xs text-white font-medium truncate">
                            <span className="text-primary font-bold">{alerts[activeAlert].name}</span> tipped{' '}
                            <span className="text-emerald-400 font-bold">{alerts[activeAlert].amount}</span>
                          </p>
                          <p className="text-[10px] text-zinc-400 truncate mt-0.5">"{alerts[activeAlert].message}"</p>
                        </div>
                        {/* YouTube/Twitch live badges */}
                        <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded border shrink-0 ${
                          alerts[activeAlert].platform === 'youtube' 
                            ? 'bg-red-500/10 text-red-500 border-red-500/30' 
                            : 'bg-purple-600/10 text-purple-400 border-purple-500/30'
                        }`}>
                          {alerts[activeAlert].platform} LIVE
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <img 
                    src="/wavetipz_banner.png" 
                    alt="WaveTipz Official Banner" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-zinc-900/90 text-primary rounded-md border border-zinc-800">
                      Status: Completed & Actively Enhanced
                    </span>
                  </div>
                </div>

                {/* Tech Stack list */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Vercel', 'Render'].map((tech, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-zinc-900 border border-zinc-800 text-gray-300"
                      >
                        {getTagIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributions */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">My Key Contributions</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    {[
                      'Designed complete UI/UX from scratch',
                      'Developed responsive frontend architecture',
                      'Built backend APIs & authentication',
                      'Integrated database & user management',
                      'Implemented donation workflow',
                      'Optimized performance & user experience'
                    ].map((contribution, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* General Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CardContent = (
                <>
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 bg-secondary/90 hover:bg-primary hover:text-black rounded-full text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
                        title="GitHub Code"
                      >
                        <Code size={18} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 bg-secondary/90 hover:bg-primary hover:text-black rounded-full text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col bg-secondary rounded-b-xl">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border border-zinc-800 bg-zinc-900/80 text-gray-200"
                        >
                          {getTagIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={project.isRGB ? "rgb-card-border group" : "backdrop-blur-md bg-secondary/50 rounded-xl overflow-hidden border border-zinc-800/80 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.25)] hover:bg-secondary/70 transition-all duration-300 flex flex-col group"}
                >
                  {project.isRGB ? (
                    <div className="rgb-card-inner">
                      {CardContent}
                    </div>
                  ) : CardContent}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
