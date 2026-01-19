"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Courtly — Sports Court Booking",
      description:
        "Online sports court booking system with real-time availability",
      stack: ["React", "AWS Lambda", "GraphQL", "DynamoDB"],
      link: "https://events.mycourtly.com",
      highlights: [
        "Developed booking flow UI with date picker & slot selector",
        "Integrated AWS Lambda APIs for live availability",
        "Built responsive mobile-first components",
      ],
    },
    {
      name: "Upsana — Spiritual Learning",
      description:
        "Devotional and spiritual learning platform with content streaming",
      stack: ["React", "Node.js", "GraphQL", "REST APIs"],
      link: "https://shreeupasana.netlify.app",
      highlights: [
        "This is PWA application",
        "Developed clean, responsive UI screens with routing",
        "Integrated backend APIs for spiritual content & media rendering",
        "Created reusable components & improved page load performance",
      ],
    },
    {
      name: "Foodizm — Food Delivery",
      description:
        "Restaurant and food delivery platform with order management",
      stack: ["React", "GraphQL", "Node.js", "DynamoDB"],
      link: "https://foodizm.in",
      highlights: [
        "This is PWA application",
        "Built restaurant listing, menu screens, cart flow",
        "Implemented authentication & protected routes",
        "Integrated GraphQL APIs for orders and coupons",
      ],
    },
    {
      name: "ICO — Event Management",
      description: "Coach session scheduling and slot management system",
      stack: ["React", "AWS Lambda", "GraphQL", "DynamoDB"],
      link: "https://app.corporateolympia.com/",
      highlights: [
        "Developed modules for session scheduling",
        "Built real-time slot management UI",
        "Implemented role-based access control",
      ],
    },
    {
      name: "DSOAnudan — Scheme Management",
      description:
        "Government scheme management and document validation system",
      stack: ["React", "Node.js", "AWS Lambda", "GraphQL"],
      highlights: [
        "Designed forms and scheme workflows",
        "Built role-based dashboards",
        "Implemented dynamic document validation",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
                  >
                    Live <ExternalLink size={16} />
                  </Link>
                )}
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2">
                {project.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="flex gap-3 text-sm">
                    <span className="text-accent">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
