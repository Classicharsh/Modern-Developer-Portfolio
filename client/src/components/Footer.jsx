const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-black border-t border-zinc-800 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {year} Harshit Prajapati. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
