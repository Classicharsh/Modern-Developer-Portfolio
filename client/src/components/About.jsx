import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-xl font-medium mb-6">
              Crafting digital experiences that blend technology, creativity, and innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm Harshit Prajapati, a Full Stack Developer focused on building scalable web applications and modern user experiences. With expertise in React.js, Node.js, MongoDB, Firebase, and AI-powered solutions, I transform ideas into impactful products that solve real-world challenges.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is not just to write code, but to create software that is fast, intuitive, and meaningful. I am passionate about continuous learning, problem-solving, and pushing the boundaries of modern web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
