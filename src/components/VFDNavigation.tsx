import { useState } from "react";
import { Monitor, User, Code, Mail, Award, ExternalLink, Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface VFDNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems: NavItem[] = [
  { id: "about", label: "ABOUT.SYS", icon: <User className="w-4 h-4" /> },
  { id: "projects", label: "PROJECTS.EXE", icon: <Code className="w-4 h-4" /> },
  { id: "skills", label: "SKILLS.DAT", icon: <Award className="w-4 h-4" /> },
  { id: "contact", label: "CONTACT.CMD", icon: <Mail className="w-4 h-4" /> },
];

export default function VFDNavigation({ activeSection, onSectionChange }: VFDNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <>
      {/* Mobile Menu Trigger */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 vfd-button p-2"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-80 bg-card vfd-panel p-6 scan-lines
        lg:relative lg:translate-x-0
        fixed inset-y-0 left-0 z-40 transform transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:block
      `}>
        {/* VFD Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Monitor className="w-5 h-5 text-primary" />
            <span className="vfd-text font-mono text-sm">TERMINAL v2.1</span>
          </div>
          <div className="vfd-accent-line mb-4"></div>
          <h1 className="vfd-text-bright text-xl font-mono mb-2 vfd-flicker">
            PORTFOLIO.SYSTEM
          </h1>
          <p className="vfd-text-dim text-xs font-mono">
            &gt; INITIALIZING INTERFACE...
            <br />
            &gt; LOADING USER DATA...
            <br />
            &gt; READY
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <div className="vfd-text-dim text-xs font-mono mb-3">
            SELECT MODULE:
          </div>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={`vfd-button w-full text-left flex items-center gap-3 ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.icon}
              <span className="font-mono text-sm">{item.label}</span>
              {activeSection === item.id && (
                <ExternalLink className="w-3 h-3 ml-auto animate-glow-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* System Info */}
        <div className="mt-8 pt-4 border-t border-primary/30">
          <div className="vfd-text-dim text-xs font-mono space-y-1">
            <div>&gt; SYS: OPERATIONAL</div>
            <div>&gt; CPU: 100% EFFICIENCY</div>
            <div>&gt; MEM: {Math.floor(Math.random() * 100)}% USED</div>
            <div className="animate-glow-pulse">&gt; STATUS: ONLINE</div>
          </div>
        </div>
      </div>
    </>
  );
}