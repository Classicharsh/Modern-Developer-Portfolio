import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Featured', to: 'featured-projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-secondary py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer">
            <Magnetic>
              <Link to="home" smooth={true} duration={500} className="relative group text-2xl font-extrabold tracking-tight select-none">
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-primary transition-all duration-500">
                  Portfolio
                </span>
                <span className="text-primary group-hover:text-blue-400 transition-all duration-500 inline-block group-hover:translate-x-1.5 group-hover:scale-125 ml-[1px]">
                  .
                </span>
              </Link>
            </Magnetic>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-primary font-semibold active-nav"
                className="relative py-2 text-textLight/80 hover:text-primary transition-colors duration-300 cursor-pointer text-sm font-medium group"
              >
                <span className="relative pb-1 select-none">
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textLight hover:text-primary transition-colors duration-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md absolute w-full left-0 top-full border-b border-gray-800 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                activeClass="text-primary bg-black/30 border-l-2 border-primary pl-4 font-semibold"
                className="block px-3 py-2 text-base font-medium text-textLight/90 hover:text-primary hover:bg-black/25 rounded-r-md cursor-pointer transition-all duration-300 border-l-2 border-transparent hover:border-primary/50 pl-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
