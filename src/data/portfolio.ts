export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  hugginfaceLink?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Experience {
  title: string;
  content: React.ReactNode;
}

export const portfolio = {
  name: "Ismail Medjahdi",
  role: "AI Engineer",
  tagline: "AI Engineer with a background in full-stack development",
  summary:
    "AI Engineer with 2+ years focused on ML/DL. Specializing in NLP, LLMs, and computer vision — with hands-on experience fine-tuning Arabic language models, building face recognition systems, and implementing transformer architectures from scratch.",

  education: {
    degree: "B.Sc. Computer Science",
    school: "University Djilali Lyabes Sidi Bel Abbès",
    year: "Expected 2027",
    note: "Most of my studies were through books, articles, and YouTube videos. I also attend university for deeper knowledge and collaboration.",
  },

  skills: {
    "Languages & Tools": [
      "Python",
      "SQL",
      "Java",
      "C/C++",
      "JavaScript",
      "HTML/CSS",
    ],
    "ML & AI": [
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Hugging Face",
      "Transformers",
      "NLP",
      "Computer Vision",
    ],
    "Data & Visualization": [
      "Jupyter",
      "Pandas",
      "Seaborn",
      "Matplotlib",
    ],
    Databases: ["PostgreSQL", "MySQL"],
    "Cloud & DevOps": ["Docker", "Git/GitHub", "Hugging Face"],
  },

  projects: [
    {
      title: "Smart Attendance System",
      description:
        "Face recognition system for employee attendance logging. Fine-tuned on LFW dataset using ArcFace loss head. Achieved 98% ranking. Built with PyTorch + OpenCV.",
      technologies: ["PyTorch", "OpenCV", "ArcFace", "LFW Dataset"],
      githubLink: "https://github.com/SHANKER4K",
    },
    {
      title: "Hadith Segmentation",
      description:
        "Fine-tuned AraBERT to handle Hadith matn and sanad separation — distinguishing text content from chain of narration.",
      technologies: ["AraBERT", "Hugging Face", "NLP", "Transformers"],
      hugginfaceLink: "https://huggingface.co/SHANKER4k/hadith-segmentation-bert",
    },
    {
      title: "Transformer from Scratch",
      description:
        "Implemented the Transformer architecture from scratch by reading the 'Attention is All You Need' paper — zero boilerplate, full understanding.",
      technologies: ["PyTorch", "Transformers", "Attention", "Deep Learning"],
      githubLink: "https://github.com/SHANKER4K",
    },
    {
      title: "AutoVendr",
      description:
        "Admin dashboard for Riwaqi e-commerce platform with inventory management and analytics.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle"],
      liveLink: "https://autovendr.vercel.app/",
      githubLink: "https://github.com/SHANKER4K",
      image: "https://i.ibb.co/WNjc626d/image.png",
    },
    {
      title: "Riwaqi",
      description:
        "Modern e-commerce platform with secure payment processing and user management.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle"],
      liveLink: "https://riwaqi.vercel.app/",
      githubLink: "https://github.com/SHANKER4K/",
      image: "https://i.ibb.co/xKJZv87H/image.jpg",
    },
  ],

  experience: [
    {
      title: "2022",
      content:
        "Began Computer Science studies focusing on C/C++, data structures, algorithms, and problem-solving.",
    },
    {
      title: "2023",
      content:
        "Transitioned to JavaScript development, building web apps while strengthening algorithmic problem-solving on CodeWars.",
    },
    {
      title: "2024–2025",
      content:
        "Deep-dived into ML/DL — read Hands-On Machine Learning, implemented CNN/RNN/LSTM models, studied the Attention Is All You Need paper, built Transformer from scratch, fine-tuned AraBERT, and built a production face recognition system.",
    },
  ],

  certifications: [
    {
      title: "Full-Stack Web Development With Next.js",
      issuer: "Next.js",
      date: "Jan 2025",
      link: "https://nextjs.org/learn/certificate?course=dashboard-app&user=35891&certId=dashboard-app-35891-1752574553793",
    },
    {
      title: "Front End Development with React",
      issuer: "HackerRank",
      date: "Jun 2025",
      link: "https://www.hackerrank.com/certificates/6dcc1b4912ed",
    },
  ],

  social: {
    github: "https://github.com/SHANKER4K",
    linkedin: "https://www.linkedin.com/in/medjahdi-ismail-826a10257/",
    leetcode: "https://leetcode.com/u/SHANKER2K/",
    codewars: "https://www.codewars.com/users/SHANKER4K",
    email: "medjahdiismail1998@gmail.com",
  },

  location: "Algeria",
};
