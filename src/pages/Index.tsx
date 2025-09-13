import { useState } from "react";
import VFDNavigation from "@/components/VFDNavigation";
import VFDContent from "@/components/VFDContent";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen vfd-screen bg-background">
      {/* VFD Header Bar */}
      <div className="h-12 bg-card border-b border-primary/30 flex items-center px-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
          <span className="vfd-text font-mono text-sm">PORTFOLIO_TERMINAL</span>
        </div>
        <div className="ml-auto vfd-text-dim font-mono text-xs">
          {new Date().toLocaleString().toUpperCase()}
        </div>
      </div>

      {/* Main Interface */}
      <div className="flex min-h-[calc(100vh-3rem)]">
        <VFDNavigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <VFDContent activeSection={activeSection} />
      </div>

      {/* Footer Status Bar */}
      <div className="h-8 bg-card border-t border-primary/30 flex items-center px-6">
        <div className="vfd-text-dim font-mono text-xs flex items-center gap-4">
          <span>SYSTEM_STATUS: ONLINE</span>
          <span>|</span>
          <span>MODE: INTERACTIVE</span>
          <span>|</span>
          <span>USER: GUEST</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
