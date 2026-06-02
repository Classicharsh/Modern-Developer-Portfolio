import { motion } from 'react-scroll'; // Wait, import motion from framer-motion is already there. Let's make sure imports are right!
import { motion as motionDom } from 'framer-motion'; // Actually, original file had: import { motion } from 'framer-motion'
import { Download } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motionDom.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary p-2 overflow-hidden bg-secondary">
              <img 
                src="/profile.jpg" 
                alt="Harshit Prajapati" 
                className="w-full h-full rounded-full object-cover"
                fetchpriority="high"
              />
            </div>
          </motionDom.div>

          <motionDom.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Harshit Prajapati
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Web Developer / React Developer
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              I build interactive, responsive, and scalable web applications using modern technologies. Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Magnetic>
                <motionDom.a 
                  href="/resume.pdf" 
                  target="_blank"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-black bg-gradient-to-r from-primary to-emerald-400 hover:from-emerald-400 hover:to-primary transition-all duration-300 gap-2 cursor-pointer shadow-md"
                >
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download Resume
                </motionDom.a>
              </Magnetic>
              <Magnetic>
                <motionDom.a 
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(16, 185, 129, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-base font-semibold rounded-lg text-primary hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer shadow-sm"
                >
                  Contact Me
                </motionDom.a>
              </Magnetic>
            </div>
          </motionDom.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
