import { Link } from 'react-scroll';

const Header = () => {
  const navItems = [
    { to: "why-us", label: "Why Us" },
    { to: "what-we-do", label: "What We Do" },
    { to: "who-we-build-for", label: "Who We Build For" },
    { to: "how-it-works", label: "How It Works" },
    { to: "why-choose-us", label: "Why Choose Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold gradient-text">
          VAIN LABS
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              activeClass="nav-link-active" // Add this for glowing underline
              spy={true} // Enables spy scrolling for active class
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;