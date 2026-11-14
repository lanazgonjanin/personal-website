import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import "./projects-explorer.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-projects-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-projects-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function ProjectsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className={`forest-projects ${ibmPlexSans.className} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      {children}
    </div>
  );
}
