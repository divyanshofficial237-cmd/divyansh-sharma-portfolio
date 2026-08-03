"use client";

import Image from "next/image";
import {
  siTypescript,
  siJavascript,
  siPython,
  siNodedotjs,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siFramer,
  siGit,
  siDocker,
  siFigma,
  siPostgresql,
  siSupabase,
  siVercel,
  siLinear,
  siFastapi,
  siMongodb,
  siFirebase,
  siMapbox,
  siMysql,
  siLangchain,
  siN8n,
  siHtml5,
  siCss,
  siExpress,
  siSocketdotio,
  siGooglegemini,
} from 'simple-icons';

interface TechIconProps {
  name: string;
  size?: number;
}

const iconMap: Record<string, { path: string; hex: string }> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  "Node.js": siNodedotjs,
  React: siReact,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  "Framer Motion": siFramer,
  Git: siGit,
  Docker: siDocker,
  Figma: siFigma,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Vercel: siVercel,
  Linear: siLinear,
  FastAPI: siFastapi,
  MongoDB: siMongodb,
  Firebase: siFirebase,
  Mapbox: siMapbox,
  MySQL: siMysql,
  LangChain: siLangchain,
  n8n: siN8n,
  HTML: siHtml5,
  CSS: siCss,
  "Express.js": siExpress,
  "Socket.io": siSocketdotio,
  "Gemini API": siGooglegemini,
};

// Image-based icons (from /public)
const imageIcons: Record<string, string> = {
  LangChain: "/langchain logo.png",
  LangGraph: "/langgraph logo.png",
  Pinecone: "/pinecone logo db.png",
  ChromaDB: "/chroma db logo.png",
};


const customIcons: Record<string, { svg: string; color: string }> = {
  "OpenAI API": {
    color: "#10A37F",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>`,
  },
  LangSmith: {
    color: "#F97316",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><rect x="10" y="10" width="80" height="80" rx="12"/><path d="M30 65 L50 35 L70 65" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="38" y1="55" x2="62" y2="55" stroke="white" stroke-width="8" stroke-linecap="round"/></svg>`,
  },
  "Vector Databases": {
    color: "#6366F1",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><ellipse cx="50" cy="28" rx="36" ry="14"/><path d="M14 28 Q14 42 50 42 Q86 42 86 28" fill="none" stroke="currentColor" stroke-width="4"/><path d="M14 28 L14 50 Q14 64 50 64 Q86 64 86 50 L86 28" fill="currentColor" opacity="0.3"/><path d="M14 50 Q14 64 50 64 Q86 64 86 50" fill="none" stroke="currentColor" stroke-width="4"/><path d="M14 50 L14 72 Q14 86 50 86 Q86 86 86 72 L86 50" fill="currentColor" opacity="0.15"/><ellipse cx="50" cy="72" rx="36" ry="14"/></svg>`,
  },
  "REST APIs": {
    color: "#009688",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><rect x="5" y="20" width="90" height="60" rx="10"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="bold" fill="white" font-family="monospace">REST</text></svg>`,
  },
  WebSockets: {
    color: "#010101",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><path d="M20 50 Q35 20 50 50 Q65 80 80 50" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="20" cy="50" r="8"/><circle cx="80" cy="50" r="8"/></svg>`,
  },
  RAG: {
    color: "#8B5CF6",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><rect x="5" y="5" width="90" height="90" rx="12"/><text x="50" y="62" text-anchor="middle" font-size="28" font-weight="bold" fill="white" font-family="monospace">RAG</text></svg>`,
  },
  "Groq API": {
    color: "#F55036",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><rect x="5" y="5" width="90" height="90" rx="14"/><text x="50" y="63" text-anchor="middle" font-size="36" font-weight="900" fill="white" font-family="sans-serif">Groq</text></svg>`,
  },
  "Twilio API": {
    color: "#F22F46",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor"><rect x="5" y="5" width="90" height="90" rx="50"/><circle cx="36" cy="36" r="10" fill="white"/><circle cx="64" cy="36" r="10" fill="white"/><circle cx="36" cy="64" r="10" fill="white"/><circle cx="64" cy="64" r="10" fill="white"/></svg>`,
  },
};

export function TechIcon({ name, size = 40 }: TechIconProps) {
  const icon = iconMap[name];
  const customIcon = customIcons[name];
  const imageSrc = imageIcons[name];

  // Image-based icons (from /public)
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt={name}
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    );
  }

  // Custom SVG icons
  if (customIcon) {
    return (
      <div
        style={{ width: size, height: size, color: customIcon.color }}
        dangerouslySetInnerHTML={{ __html: customIcon.svg }}
      />
    );
  }
  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={`#${icon.hex}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{name}</title>
        <path d={icon.path} />
      </svg>
    );
  }

  // Fallback
  return (
    <div
      className="rounded-lg bg-muted flex items-center justify-center text-xs font-medium"
      style={{ width: size, height: size }}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function TechStackIcons({ skills }: { skills: Record<string, string[]> }) {
  const allSkills = Object.values(skills).flat();

  return (
    <div className="flex flex-wrap items-center gap-3">
      {allSkills.map((skill, index) => (
        <div
          key={index}
          title={skill}
          className="transition-transform duration-200 hover:scale-110"
        >
          <TechIcon name={skill} size={32} />
        </div>
      ))}
    </div>
  );
}
