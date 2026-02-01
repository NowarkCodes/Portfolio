const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Alex Chen. Built with care.
        </p>
        
        <p className="text-sm text-muted-foreground">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-foreground transition-colors"
          >
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
