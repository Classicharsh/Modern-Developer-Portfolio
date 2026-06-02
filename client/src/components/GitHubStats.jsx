import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitPullRequest, GitBranch, FolderGit, Users, ExternalLink, Award, Sparkles } from 'lucide-react';

// Custom high-fidelity SVGs of GitHub Achievements

const QuickdrawBadge = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="46" fill="#18181B" stroke="#F97316" strokeWidth="3" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="4 2" />
    
    {/* Background Glow */}
    <radialGradient id="quickGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#EA580C" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
    </radialGradient>
    <circle cx="50" cy="50" r="38" fill="url(#quickGlow)" />

    {/* Cowboy Hat */}
    <path d="M25 45 C 25 35, 75 35, 75 45 C 65 42, 35 42, 25 45 Z" fill="#78350F" />
    <path d="M35 42 C 35 25, 65 25, 65 42 Z" fill="#92400E" />
    <path d="M35 38 H 65" stroke="#FBBF24" strokeWidth="2" /> {/* Hat Ribbon */}

    {/* Cat Face */}
    <circle cx="50" cy="55" r="18" fill="#FBBF24" /> {/* Cat Head */}
    {/* Cat Ears */}
    <polygon points="34,42 30,28 42,39" fill="#FBBF24" />
    <polygon points="66,42 70,28 58,39" fill="#FBBF24" />
    {/* Inner Ears */}
    <polygon points="35,40 32,31 40,38" fill="#F472B6" />
    <polygon points="65,40 68,31 60,38" fill="#F472B6" />
    {/* Eyes */}
    <ellipse cx="43" cy="53" rx="2.5" ry="3.5" fill="#000" />
    <ellipse cx="57" cy="53" rx="2.5" ry="3.5" fill="#000" />
    <circle cx="44" cy="51.5" r="0.8" fill="#FFF" />
    <circle cx="58" cy="51.5" r="0.8" fill="#FFF" />
    {/* Cat Cheeks */}
    <circle cx="37" cy="57" r="2.5" fill="#F472B6" opacity="0.6" />
    <circle cx="63" cy="57" r="2.5" fill="#F472B6" opacity="0.6" />
    {/* Nose & Mouth */}
    <polygon points="49,56 51,56 50,57.5" fill="#E11D48" />
    <path d="M47 59 Q 50 61, 50 59 Q 50 61, 53 59" stroke="#000" strokeWidth="1" fill="none" />

    {/* Firing Laser Guns / Confetti */}
    <g transform="translate(18, 62) rotate(-35)">
      <rect x="0" y="0" width="12" height="6" rx="2" fill="#EF4444" />
      <rect x="8" y="4" width="3" height="6" rx="1" fill="#EF4444" />
      <circle cx="2" cy="3" r="1.5" fill="#FBBF24" />
    </g>
    <g transform="translate(82, 62) rotate(35) scale(-1, 1)">
      <rect x="0" y="0" width="12" height="6" rx="2" fill="#EF4444" />
      <rect x="8" y="4" width="3" height="6" rx="1" fill="#EF4444" />
      <circle cx="2" cy="3" r="1.5" fill="#FBBF24" />
    </g>
    
    {/* Laser Beams */}
    <line x1="8" y1="68" x2="0" y2="72" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <line x1="92" y1="68" x2="100" y2="72" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PullSharkBadge = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="46" fill="#18181B" stroke="#3B82F6" strokeWidth="3" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 3" />

    {/* Background Waves Glow */}
    <radialGradient id="sharkGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
    </radialGradient>
    <circle cx="50" cy="50" r="38" fill="url(#sharkGlow)" />

    {/* Waves */}
    <path d="M20 62 Q 35 55, 50 62 Q 65 69, 80 62" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M15 70 Q 32 65, 50 70 Q 68 75, 85 70" stroke="#3B82F6" strokeWidth="2.5" fill="none" opacity="0.6" />

    {/* Shark Head */}
    <path d="M30 65 C 30 35, 70 35, 70 65 Z" fill="#4B5563" /> {/* Shark Body Dark Grey */}
    <path d="M34 65 C 34 42, 66 42, 66 65 Z" fill="#9CA3AF" /> {/* Shark Belly Light Grey */}
    <path d="M40 65 C 40 48, 60 48, 60 65 Z" fill="#FAFAFA" /> {/* Inner Mouth White */}

    {/* Fin */}
    <path d="M50 35 Q 56 22, 58 18 Q 54 26, 50 35" fill="#4B5563" />

    {/* Eyes */}
    <circle cx="42" cy="46" r="2.5" fill="#000" />
    <circle cx="58" cy="46" r="2.5" fill="#000" />
    <circle cx="43" cy="45" r="0.7" fill="#FFF" />
    <circle cx="59" cy="45" r="0.7" fill="#FFF" />

    {/* Teeth */}
    <polygon points="42,48 44,52 46,48" fill="#FFF" />
    <polygon points="46,48 48,52 50,48" fill="#FFF" />
    <polygon points="50,48 52,52 54,48" fill="#FFF" />
    <polygon points="54,48 56,52 58,48" fill="#FFF" />

    {/* Pull Request Document in Mouth */}
    <g transform="translate(38, 52)">
      <rect x="0" y="0" width="24" height="14" rx="2" fill="#FFF" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Git Pull Request Symbol */}
      <circle cx="6" cy="7" r="1.5" fill="#3B82F6" />
      <circle cx="18" cy="4" r="1.5" fill="#3B82F6" />
      <circle cx="18" cy="10" r="1.5" fill="#3B82F6" />
      <line x1="6" y1="7" x2="12" y2="7" stroke="#3B82F6" strokeWidth="1" />
      <line x1="12" y1="7" x2="18" y2="4" stroke="#3B82F6" strokeWidth="1" />
      <line x1="18" y1="5.5" x2="18" y2="8.5" stroke="#3B82F6" strokeWidth="1" />
    </g>
  </svg>
);

const YoloBadge = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="46" fill="#18181B" stroke="#EC4899" strokeWidth="3" />
    <circle cx="50" cy="50" r="42" fill="none" stroke="#EC4899" strokeWidth="1" strokeDasharray="8 4" />

    {/* Gradient Glow */}
    <radialGradient id="yoloGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#DB2777" stopOpacity="0.45" />
      <stop offset="100%" stopColor="#DB2777" stopOpacity="0" />
    </radialGradient>
    <circle cx="50" cy="50" r="38" fill="url(#yoloGlow)" />

    {/* Flame / Rocket Trail */}
    <path d="M42 65 Q 50 85, 58 65 Q 50 72, 42 65" fill="#F43F5E" />
    <path d="M46 65 Q 50 78, 54 65 Q 50 69, 46 65" fill="#F59E0B" />

    {/* Cat Face */}
    <circle cx="50" cy="45" r="16" fill="#E4E4E7" />
    {/* Ears */}
    <polygon points="36,36 30,22 42,32" fill="#E4E4E7" />
    <polygon points="64,36 70,22 58,32" fill="#E4E4E7" />
    <polygon points="37,34 32,25 40,31" fill="#FDA4AF" />
    <polygon points="63,34 68,25 60,31" fill="#FDA4AF" />

    {/* Sunglasses (YOLO Cool Style) */}
    <path d="M33 42 H 67 Q 67 52, 60 52 Q 50 48, 40 52 Q 33 52, 33 42 Z" fill="#111827" />
    <line x1="36" y1="45" x2="44" y2="49" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="56" y1="45" x2="64" y2="49" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />

    {/* Smile */}
    <path d="M47 52 Q 50 54, 53 52" stroke="#111827" strokeWidth="1.5" fill="none" />
  </svg>
);

const ArcticCodeVaultBadge = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 filter drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]">
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="46" fill="#18181B" stroke="#14B8A6" strokeWidth="3" />
    
    {/* Icy Glow */}
    <radialGradient id="vaultGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#0D9488" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
    </radialGradient>
    <circle cx="50" cy="50" r="38" fill="url(#vaultGlow)" />

    {/* Vault Door Detail */}
    <circle cx="50" cy="50" r="28" fill="none" stroke="#14B8A6" strokeWidth="2.5" />
    
    {/* Snowflake (Centerpiece) */}
    <g stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round">
      {/* 6 Spokes */}
      <line x1="50" y1="32" x2="50" y2="68" />
      <line x1="34.4" y1="41" x2="65.6" y2="59" />
      <line x1="34.4" y1="59" x2="65.6" y2="41" />
      
      {/* Arrow branches */}
      <path d="M46 36 L 50 32 L 54 36" fill="none" />
      <path d="M46 64 L 50 68 L 54 64" fill="none" />
      <path d="M37 40 L 34.4 41 L 35.5 45" fill="none" />
      <path d="M63 60 L 65.6 59 L 64.5 55" fill="none" />
      <path d="M35.5 55 L 34.4 59 L 37 60" fill="none" />
      <path d="M64.5 45 L 65.6 41 L 63 40" fill="none" />
    </g>
    
    {/* Mechanical Lock Points */}
    <circle cx="50" cy="50" r="5" fill="#14B8A6" />
  </svg>
);

const GitHubStats = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeBadge, setActiveBadge] = useState(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Classicharsh');
        if (response.ok) {
          const data = await response.json();
          setProfile({
            avatar: data.avatar_url,
            name: data.name || 'Harshit Prajapati',
            username: data.login,
            bio: data.bio || 'Full-Stack Developer | Building premium digital assets & interfaces.',
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            url: data.html_url
          });
        } else {
          throw new Error('Failed to fetch from GitHub API');
        }
      } catch (error) {
        // Fallback mockup profile to prevent loading screen if offline or rate-limited
        setProfile({
          avatar: 'https://github.com/Classicharsh.png',
          name: 'Harshit Prajapati',
          username: 'Classicharsh',
          bio: 'Full-Stack Developer | Building premium digital assets & interfaces.',
          repos: 28,
          followers: 145,
          following: 86,
          url: 'https://github.com/Classicharsh'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProfile();
  }, []);

  const achievements = [
    {
      id: 'quickdraw',
      name: 'Quickdraw',
      desc: 'Closed an issue or pull request within 5 minutes of opening.',
      color: 'from-orange-500 to-amber-500',
      badge: <QuickdrawBadge />,
      unlockedAt: 'Oct 2024'
    },
    {
      id: 'pullshark',
      name: 'Pull Shark',
      desc: 'Opened a pull request that was merged successfully into a repository.',
      color: 'from-blue-500 to-indigo-600',
      badge: <PullSharkBadge />,
      unlockedAt: 'Nov 2024'
    },
    {
      id: 'yolo',
      name: 'YOLO',
      desc: 'Merged a pull request directly without waiting for manual code reviews.',
      color: 'from-pink-500 to-rose-600',
      badge: <YoloBadge />,
      unlockedAt: 'Jan 2025'
    },
    {
      id: 'vault',
      name: 'Arctic Code Vault',
      desc: 'Contributed code to repositories archived in the 2020 GitHub Archive Program.',
      color: 'from-teal-400 to-cyan-500',
      badge: <ArcticCodeVaultBadge />,
      unlockedAt: 'Feb 2020'
    }
  ];

  return (
    <section id="github-stats" className="py-20 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse delay-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={12} /> Contributions & Badges
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            GitHub <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Achievements & Stats</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            A real-time overview of my open-source footprint, contributions, and badges earned on GitHub.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Side: Profile & Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 bg-secondary/40 backdrop-blur-md rounded-2xl border border-zinc-800/80 p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 relative group"
            >
              {/* Profile Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden bg-zinc-900">
                    <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-1.5 hover:text-primary transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-500">@{profile.username}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">{profile.bio}</p>

                {/* Grid Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800 text-center hover:border-primary/30 transition-colors">
                    <FolderGit size={20} className="mx-auto text-primary mb-2" />
                    <span className="block text-xl font-extrabold text-white">{profile.repos}</span>
                    <span className="text-2xs text-gray-500 uppercase font-semibold">Repos</span>
                  </div>
                  <div className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800 text-center hover:border-primary/30 transition-colors">
                    <Users size={20} className="mx-auto text-primary mb-2" />
                    <span className="block text-xl font-extrabold text-white">{profile.followers}</span>
                    <span className="text-2xs text-gray-500 uppercase font-semibold">Followers</span>
                  </div>
                  <div className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800 text-center hover:border-primary/30 transition-colors">
                    <GitBranch size={20} className="mx-auto text-primary mb-2" />
                    <span className="block text-xl font-extrabold text-white">{profile.following}</span>
                    <span className="text-2xs text-gray-500 uppercase font-semibold">Following</span>
                  </div>
                </div>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-full py-3.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl border border-zinc-800 hover:border-primary/50 text-sm font-semibold flex items-center justify-center gap-2 group/btn transition-all"
              >
                View GitHub Profile <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Right Side: Achievements Badges Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-secondary/40 backdrop-blur-md rounded-2xl border border-zinc-800/80 p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 relative"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Award className="text-primary" /> Profile Badges
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  Hover over the achievements to discover how they were unlocked on my profile.
                </p>

                {/* Achievements List */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                  {achievements.map((badge) => (
                    <div key={badge.id} className="relative">
                      <motion.button
                        onMouseEnter={() => setActiveBadge(badge)}
                        onMouseLeave={() => setActiveBadge(null)}
                        onClick={() => setActiveBadge(activeBadge?.id === badge.id ? null : badge)}
                        whileHover={{ scale: 1.12, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="focus:outline-none cursor-pointer p-2 rounded-full relative"
                      >
                        {badge.badge}
                      </motion.button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooltip Description Panel */}
              <div className="mt-8 min-h-[100px] bg-zinc-900/60 rounded-xl p-5 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeBadge ? (
                    <motion.div
                      key={activeBadge.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-base">{activeBadge.name}</span>
                        <span className="text-2xs text-primary font-semibold uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                          Unlocked • {activeBadge.unlockedAt}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{activeBadge.desc}</p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-gray-500 italic text-center"
                    >
                      Hover over any badge above to see details.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;
