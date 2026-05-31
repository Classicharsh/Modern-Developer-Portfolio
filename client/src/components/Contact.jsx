import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import axios from 'axios';

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

const Linkedin = ({ size = 24, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Discord = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    {...props}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 mb-8">
                I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Email</h4>
                    <p className="text-white font-medium">
                      <a href="mailto:prajapatiharshit130@gmail.com" className="hover:text-primary transition-colors">
                        prajapatiharshit130@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Phone</h4>
                    <p className="text-white font-medium">
                      <a href="tel:+919565111969" className="hover:text-primary transition-colors">
                        +91 9565111969
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p className="text-white font-medium">Kanpur, India</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/harshitprajapaticode" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/Classicharsh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://discord.gg/uk2v4jMsVV" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                    title="Discord"
                  >
                    <Discord size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary p-8 rounded-xl border border-zinc-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-zinc-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-zinc-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-zinc-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
                {status.success && <p className="text-primary text-sm">Message sent successfully!</p>}

                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="w-full bg-primary text-black font-semibold py-3 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
