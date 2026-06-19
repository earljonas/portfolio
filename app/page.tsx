"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Calendar, 
  Users, 
  ChevronRight,
  Info,
  Layers,
  Send,
  ExternalLink,
  X,
  ChevronLeft
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const PROJECT_IMAGES: Record<string, string[]> = {
  "continental-gym": [
    "landing-page1.png","admin-dashboard.png","landing-page2.png","landing-page3.png","landing-page4.png","landing-page5.png","admin-announcements.png","admin-attendance.png","admin-billing.png","admin-branches.png","admin-members.png","admin-plans.png","branch-announcements.png","branch-attendance.png","branch-attendance2.png","branch-billing.png","branch-dashboard.png","branch-members.png","member-home.png","member-profile.png","member-progress.png","member-progress2.png","member-session.png","member-session2.png","member-session3.png","member-workouts.png","register-page.png"
  ].map(f => `/contnental-gym/${f}`),
  "kaon-check": [
    "1.png","2.png","3.png","4.png","ai-chat2.png"
  ].map(f => `/kaon-check/${f}`),
  "anvys-hub": [
    "admin-dashboard.png","login.png","1.jpg","admin-attendance.png","admin-directory.png","admin-events.png","admin-inventory.png","admin-locations.png","admin-payroll.png","admin-reports1.png","admin-reports2.png","admin-reports3.png","admin-reports4.png","admin-schedule.png","staff-attendance.png","staff-inventory.png","staff-POS.png"
  ].map(f => `/anvys-hub/${f}`)
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === "Escape") setActiveProject(null);
      if (e.key === "ArrowRight") setImgIndex(p => (p + 1) % PROJECT_IMAGES[activeProject].length);
      if (e.key === "ArrowLeft") setImgIndex(p => (p === 0 ? PROJECT_IMAGES[activeProject].length - 1 : p - 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/10 pb-20">
       <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-8 relative">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between items-start gap-6 w-full relative">
             
             <div className="flex flex-col md:flex-row gap-6 items-start">
               <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl border border-border overflow-hidden bg-background flex items-center justify-center text-4xl font-bold">
                 EJ
               </div>
               
               <div className="flex flex-col pt-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Earl Jonas Tigno</h1>
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-foreground/60 mt-1.5 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Davao City, Philippines</span>
                  </div>
                  
                  <p className="mt-3 font-medium text-foreground/90">
                    Aspiring Full-Stack Developer | Applied AI | BSCS Student
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-5">
                    <a href="mailto:earljonastigno@gmail.com" className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                    <a href="https://github.com/earljonas" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-background border border-border text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-foreground/5 transition-colors">
                      <Users className="w-4 h-4" />
                      GitHub Profile
                    </a>
                  </div>
               </div>
             </div>

             <div className="absolute top-0 right-0 md:static md:mt-2">
               <ThemeToggle />
             </div>
             
          </section>

          {/* Two Column Grid */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
             
             {/* Left Column */}
             <div className="md:col-span-5 flex flex-col gap-6">
                
                {/* About Me */}
                <div className="border border-border rounded-2xl p-6 bg-background">
                   <div className="flex items-center gap-2.5 mb-5">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full border border-foreground/20">
                         <Info className="w-3.5 h-3.5" />
                      </div>
                      <h2 className="text-lg font-bold">About Me</h2>
                   </div>
                   <div className="text-sm text-foreground/70 space-y-4 leading-relaxed">
                      <p>
                        I'm a full-stack developer who loves building things that actually work. 
                      </p>
                      <p>
                        Currently working my way toward AI engineering, always learning, always building something new.
                      </p>
                   </div>
                </div>

                {/* Education */}
                <div className="border border-border rounded-2xl p-6 bg-background">
                   <div className="flex items-center gap-2.5 mb-5">
                      <GraduationCap className="w-5 h-5" />
                      <h2 className="text-lg font-bold">Education</h2>
                   </div>
                   <div>
                      <h3 className="font-bold text-sm">BS Computer Science</h3>
                      <p className="text-foreground/60 text-sm mt-0.5">University of Mindanao</p>
                      <p className="text-foreground/50 text-xs mt-1">2023 - Present</p>
                   </div>
                   
                   <div className="mt-6 pt-6 border-t border-border">
                      <h3 className="font-bold text-sm">Certifications</h3>
                      <div className="mt-4 space-y-4">
                        <a href="https://drive.google.com/file/d/1kqvBJfsrbYLuA6LHBY0sKnDDqHQscIYT/view?usp=sharing" target="_blank" rel="noreferrer" className="block group">
                          <p className="text-sm font-medium group-hover:underline flex items-center gap-1.5">
                            IT Specialist – Databases <ExternalLink className="w-3 h-3 text-foreground/40" />
                          </p>
                          <p className="text-xs text-foreground/60 mt-0.5">Certiport · 2026</p>
                        </a>
                        <a href="https://www.udemy.com/certificate/UC-6fadd32d-38ff-4b3a-9f1e-755875a3b2fd/" target="_blank" rel="noreferrer" className="block group">
                          <p className="text-sm font-medium group-hover:underline flex items-center gap-1.5">
                            Full-Stack Web Development <ExternalLink className="w-3 h-3 text-foreground/40" />
                          </p>
                          <p className="text-xs text-foreground/60 mt-0.5">Udemy · 2026</p>
                        </a>
                      </div>
                   </div>
                </div>

                {/* Tech Stack */}
                <div className="border border-border rounded-2xl p-6 bg-background">
                   <div className="flex items-center gap-2.5 mb-5">
                      <Layers className="w-5 h-5" />
                      <h2 className="text-lg font-bold">Tech Stack</h2>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "TypeScript", "Python", "FastAPI", "Laravel", "Supabase", "PostgreSQL", "Docker"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs font-medium border border-border rounded-lg text-foreground/80 hover:bg-foreground/5 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Contact Form */}
                <div className="border border-border rounded-2xl p-6 bg-background flex flex-col flex-1">
                   <div className="flex items-center gap-2.5 mb-5">
                      <Mail className="w-5 h-5" />
                      <h2 className="text-lg font-bold">Get in Touch</h2>
                   </div>
                   <form className="flex flex-col gap-4 flex-1">
                      <div className="flex flex-col gap-1.5">
                         <label className="text-xs font-semibold text-foreground/80">Name</label>
                         <input type="text" placeholder="John Doe" className="px-3 py-2 text-sm border border-border rounded-lg bg-transparent focus:outline-none focus:border-foreground/30 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                         <label className="text-xs font-semibold text-foreground/80">Email</label>
                         <input type="email" placeholder="john@example.com" className="px-3 py-2 text-sm border border-border rounded-lg bg-transparent focus:outline-none focus:border-foreground/30 transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                         <label className="text-xs font-semibold text-foreground/80">Message</label>
                         <textarea rows={3} placeholder="How can we work together?" className="px-3 py-2 text-sm border border-border rounded-lg bg-transparent focus:outline-none focus:border-foreground/30 transition-colors resize-none"></textarea>
                      </div>
                      <button type="button" className="mt-auto flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                         <Send className="w-4 h-4" />
                         Send Message
                      </button>
                   </form>
                </div>

             </div>

             {/* Right Column */}
             <div className="md:col-span-7 flex flex-col gap-6">

                {/* Projects */}
                <div className="border border-border rounded-2xl p-6 bg-background flex flex-col">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <h2 className="text-lg font-bold">Projects</h2>
                      </div>
                      <a href="https://github.com/earljonas" className="text-xs text-foreground/60 hover:text-foreground flex items-center gap-1">
                        View All <ChevronRight className="w-3 h-3" />
                      </a>
                   </div>
                   
                   <div className="flex flex-col gap-5">
                      {/* Project 1 */}
                      <div className="group">
                         <div 
                           className="w-full h-48 bg-foreground/5 rounded-lg mb-3 overflow-hidden border border-border cursor-pointer relative"
                           onClick={() => { setActiveProject("continental-gym"); setImgIndex(0); }}
                         >
                           <img src={PROJECT_IMAGES["continental-gym"][0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Continental Gym Dashboard" />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">View Gallery ({PROJECT_IMAGES["continental-gym"].length})</span>
                           </div>
                         </div>
                         <a href="https://github.com/earljonas/contnental-gym" target="_blank" className="block">
                           <h3 className="font-bold text-sm mb-1 hover:underline">Contnental Gym Management System</h3>
                           <p className="text-xs text-foreground/50 mb-2">Next.js · TypeScript · Supabase · Ollama</p>
                           <p className="text-sm text-foreground/70 leading-relaxed">Multi-branch gym management with QR check-in, role-based auth, Recharts dashboards, and an LLM-powered fitness chatbot.</p>
                         </a>
                      </div>
                      
                      <hr className="border-border" />

                      {/* Project 2 */}
                      <div className="group">
                         <div 
                           className="w-full h-48 bg-foreground/5 rounded-lg mb-3 overflow-hidden border border-border cursor-pointer relative"
                           onClick={() => { setActiveProject("kaon-check"); setImgIndex(0); }}
                         >
                           <img src={PROJECT_IMAGES["kaon-check"][0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="KaonCheck Food Recognition" />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">View Gallery ({PROJECT_IMAGES["kaon-check"].length})</span>
                           </div>
                         </div>
                         <a href="https://github.com/earljonas/kaon-check" target="_blank" className="block">
                           <h3 className="font-bold text-sm mb-1 hover:underline">KaonCheck</h3>
                           <p className="text-xs text-foreground/50 mb-2">Python · FastAPI · YOLOv8 · Ollama</p>
                           <p className="text-sm text-foreground/70 leading-relaxed">Filipino food recognition with a custom-trained YOLO model on 11 categories and LLM-powered nutrition Q&A.</p>
                         </a>
                      </div>
                      
                      <hr className="border-border" />

                      {/* Project 3 */}
                      <div className="group">
                         <div 
                           className="w-full h-48 bg-foreground/5 rounded-lg mb-3 overflow-hidden border border-border cursor-pointer relative"
                           onClick={() => { setActiveProject("anvys-hub"); setImgIndex(0); }}
                         >
                           <img src={PROJECT_IMAGES["anvys-hub"][0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Anvy's Hub Business Platform" />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">View Gallery ({PROJECT_IMAGES["anvys-hub"].length})</span>
                           </div>
                         </div>
                         <a href="https://github.com/earljonas/anvys-hub" target="_blank" className="block">
                           <h3 className="font-bold text-sm mb-1 hover:underline">Anvy's Hub</h3>
                           <p className="text-xs text-foreground/50 mb-2">Laravel · React · MySQL · Docker</p>
                           <p className="text-sm text-foreground/70 leading-relaxed">Business management platform with inventory, payroll, POS, event booking, and role-based access control.</p>
                         </a>
                      </div>
                   </div>
                </div>
                
                {/* Experience */}
                <div className="border border-border rounded-2xl p-6 bg-background flex flex-col flex-1">
                   <div className="flex items-center gap-2.5 mb-6">
                      <Briefcase className="w-5 h-5" />
                      <h2 className="text-lg font-bold">Experience</h2>
                   </div>
                   
                   <div className="flex flex-col gap-6">
                     
                      
                      {/* Item 1 */}
                      <div className="flex gap-4">
                         <div className="mt-1.5 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full border border-foreground/40"></div>
                         </div>
                         <div className="flex-1">
                            <div className="flex justify-between items-start">
                               <h3 className="font-bold text-sm">Freelance Photo Editor</h3>
                               <span className="text-xs text-foreground/60">2022</span>
                            </div>
                            <p className="text-sm text-foreground/60 mt-0.5">E-commerce · Photoshop</p>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 border-t border-border pt-8 pb-4 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://github.com/earljonas" target="_blank" rel="noreferrer" className="p-2 border border-border rounded-full hover:bg-foreground/5 transition-colors text-foreground/80">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/earl-jonas-tigno-8733b9219/" target="_blank" rel="noreferrer" className="p-2 border border-border rounded-full hover:bg-foreground/5 transition-colors text-foreground/80">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="mailto:earljonastigno@gmail.com" className="p-2 border border-border rounded-full hover:bg-foreground/5 transition-colors text-foreground/80">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-foreground/50">
              © {new Date().getFullYear()} Earl Jonas Tigno. All rights reserved.
            </p>
          </footer>
       </main>

       {/* Lightbox Modal */}
       {activeProject && (
         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200" onClick={() => setActiveProject(null)}>
           <button 
             onClick={() => setActiveProject(null)} 
             className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-10"
           >
             <X className="w-6 h-6" />
           </button>
           
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-4 py-1.5 rounded-full text-sm font-medium tracking-widest z-10">
             {imgIndex + 1} / {PROJECT_IMAGES[activeProject].length}
           </div>

           <button 
             onClick={(e) => { e.stopPropagation(); setImgIndex(p => (p === 0 ? PROJECT_IMAGES[activeProject].length - 1 : p - 1)); }}
             className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors z-10"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>

           <button 
             onClick={(e) => { e.stopPropagation(); setImgIndex(p => (p + 1) % PROJECT_IMAGES[activeProject].length); }}
             className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors z-10"
           >
             <ChevronRight className="w-6 h-6" />
           </button>

           <div className="w-full h-full p-6 md:p-12 flex items-center justify-center">
             <img 
               src={PROJECT_IMAGES[activeProject][imgIndex]} 
               alt="Project Screenshot" 
               className="max-w-full max-h-full object-contain rounded-lg" 
               onClick={(e) => e.stopPropagation()}
             />
           </div>
         </div>
       )}
    </div>
  );
}
