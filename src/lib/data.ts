import type { Profile, SkillCategory, Experience, Project } from "./types";

export const profile: Profile = {
    name: "Ahmed [Exitinger]",
    role: "Full-Stack Developer",
    location: "Babil, Iraq",
    bio: "Full-Stack Developer | Building apps, websites and bots | Backend & frontend development with system integrations | Focused on clean code, stability and security",
    email: "ssdcv101@gmail.com",
    github: "https://github.com/Exitinger",
    wakatime: "https://wakatime.com/@Exitinger",
    telegram: "https://t.me/Exitinger",
    linkedin: "https://www.linkedin.com/in/ahmed-ali-45815b308",
};

export const skills: SkillCategory[] = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Dart", "Go", "Rust", "Zig", "PHP", "Kotlin", "Swift", "Shell", "HTML5", "CSS3", "SASS"] },
    { category: "Frontend Frameworks", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Flutter", "Svelte"] },
    { category: "Backend & Runtime", items: ["Node.js", "Bun", "Express.js", "NestJS"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase"] },
    { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Heroku", "Git", "GitHub", "GitLab", "Bitbucket", "VSCode", "Android Studio", "Figma", "Postman", "Linux", "Bash"] },
];

export const experience: Experience[] = [
    {
        role: "Full-Stack Developer",
        company: "Self-Employed / Freelance",
        period: "2023 - Present",
        description: "Developing full-stack applications and backend systems. Focusing on performance code and system design."
    }
];

export interface Project {
    title: string;
    description: string;
    link: string;
    tags?: string[];
}

export const projects: Project[] = [
    {
        title: "Arch Linux Dotfiles",
        description: "My Arch Linux dotfiles include hand-picked configurations for i3, polybar, fish shell, and terminal applications, crafted for a clean, efficient, and reproducible desktop setup.",
        link: "https://github.com/Exitinger/Dotfiles",
        tags: ["ArchLinux", "dotfiles", "i3wm", "polybar", "fish-shell", "terminal-config", "linux-desktop"
        ]
    }

];
