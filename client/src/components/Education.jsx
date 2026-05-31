import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) – Computer Science & Engineering',
    institution: 'Dr. A. P. J. Abdul Kalam Technical University (AKTU), Uttar Pradesh',
    period: '2022 – 2026',
    description: 'Focused on core computer science subjects, data structures, algorithms, software engineering, and full-stack web development.'
  },
  {
    degree: 'Professional Learning & Certifications',
    institution: 'Self-Paced & Platform Guided Courses',
    period: '2025 – 2026',
    description: [
      'Full Stack Development (MERN Stack) – GeeksforGeeks (GFG)',
      'Generative AI & Automation'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0 mb-12 last:mb-0"
              >
                <div className="md:flex items-center justify-between group">
                  {/* Timeline Line (Mobile) */}
                  <div className="md:hidden absolute left-0 top-0 bottom-[-3rem] w-px bg-zinc-800 last:bottom-0"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-secondary z-10 group-hover:scale-150 transition-transform"></div>

                  <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.degree}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1 md:justify-end">
                      <GraduationCap size={16} />
                      <span className="font-medium">{item.institution}</span>
                    </div>
                  </div>

                  {/* Timeline Line (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-zinc-800 last:bottom-0"></div>

                  <div className="md:w-5/12 pl-4">
                    <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    {Array.isArray(item.description) ? (
                      <ul className="text-gray-400 text-sm list-disc pl-4 space-y-1">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    )}
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

export default Education;
