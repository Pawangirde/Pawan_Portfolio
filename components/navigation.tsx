"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "PROJECTS", id: "projects" },
    { label: "SKILLS", id: "skills" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-2xl font-bold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-md"
            >
              <span className="relative h-20 w-40">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Pawan Girade logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="20"
                  />
                </Link>
              </span>
            </button>
            <div className="flex items-center gap-8">
              <div className="hidden sm:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-accent border-b-2 border-accent pb-1"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-4">
                  <Link
                    href="https://github.com/Pawangirde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={20}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pawan-girade/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={20}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    />
                  </Link>
                  <Link href="mailto:pawangirde01@gmail.com">
                    <Mail
                      size={20}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    />
                  </Link>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="sm:hidden text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-medium transition-colors py-2 ${
                  activeSection === item.id
                    ? "text-accent border-l-4 border-accent pl-4"
                    : "text-muted-foreground hover:text-foreground pl-4"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-8 border-t border-border">
              <Link
                href="https://github.com/Pawangirde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={24}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={24}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                />
              </Link>
              <Link href="mailto:pawangirde01@gmail.com">
                <Mail
                  size={24}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
