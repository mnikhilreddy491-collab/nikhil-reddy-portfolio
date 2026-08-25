import { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { ProjectExplorer } from './components/projects/ProjectExplorer';
import { ExpertiseMap } from './components/expertise/ExpertiseMap';
import { ArchitectureCanvas } from './components/architecture/ArchitectureCanvas';
import { TimelineSection } from './components/timeline/Timeline';
import { Contact } from './components/contact/Contact';
import { QuickView } from './components/layout/QuickView';

function App() {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <div className="bg-neu-bg min-h-screen">
      {/* Sticky Header Navigation */}
      <Navbar onQuickViewOpen={() => setIsQuickViewOpen(true)} />

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto pb-12">
        <Hero />
        <About />
        <ProjectExplorer />
        <ExpertiseMap />
        <ArchitectureCanvas />
        <TimelineSection />
        <Contact />
      </main>

      {/* Recruiter Quick View Modal */}
      <QuickView isOpen={isQuickViewOpen} onClose={() => setIsQuickViewOpen(false)} />
    </div>
  );
}

export default App;
