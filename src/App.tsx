import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;