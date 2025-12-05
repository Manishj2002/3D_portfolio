import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    nextjs,
    node,
    react,
    next,
    webdev,
    chat,
    threejs,
    ecommerce,
    aiEnhancer,
    codeReview
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
 const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer (React & Next.js)",
    icon: mobile,
  },
  {
    title: "Backend Developer (Node.js & Express)",
    icon: backend,
  },
  {
    title: "3D & Interactive Experience Developer (Three.js)",
    icon: creator,
  },
];

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
  ];
  
  const experiences = [
  {
    title: "React.js Developer",
    icon: react,
    iconBg: "#383E56",
    points: [
      "Building and maintaining interactive UI components using React.js.",
      "Integrating APIs and managing application state using tools like Redux and Context API.",
      "Implementing responsive, mobile-friendly layouts with clean and reusable components.",
      "Reviewing code, improving performance, and ensuring high-quality user experience.",
    ],
  },
  {
    title: "Next.js Developer",
    icon: next,
    iconBg: "#E6DEDD",
    points: [
      "Developing high-performance web applications using Next.js, server-side rendering, and static generation.",
      "Working closely with designers and product teams to implement modern UI/UX.",
      "Optimizing pages for SEO, speed, and scalability using Next.js best practices.",
      "Maintaining clean code standards through reviews, refactoring, and documentation.",
    ],
  },
  {
    title: "Web Developer",
    icon: webdev,
    iconBg: "#383E56",
    points: [
      "Creating responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks.",
      "Ensuring cross-browser compatibility and performance optimization.",
      "Collaborating with teams to translate ideas into functional, high-quality web experiences.",
      "Debugging issues and improving UI/UX to enhance user engagement.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    icon: node,
    iconBg: "#E6DEDD",
    points: [
      "Building complete MERN stack applications with REST APIs, authentication, and database integration.",
      "Working with Node.js, Express, and MongoDB to develop scalable backend architectures.",
      "Implementing CRUD operations, user management, and secure API endpoints.",
      "Deploying full-stack applications and ensuring smooth client-server communication.",
    ],
  },
];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce",
      description:      
"Full-stack e-commerce platform that enables users to browse, purchase, and manage a wide range of products, offering a seamless and efficient shopping experience and personalized recommendations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Manishj2002/Ecommerce",
    },
    {
      name: "Chat App",
      description:
        "Real-time chat application that allows users to connect, communicate, and collaborate with others through instant messaging, providing a dynamic and interactive platform for personal and professional conversations.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Daisy UI",
          color: "white-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/Manishj2002/chat-app",
    },

    {
  name: "AI Image Enhancer",
  description:
    "An AI-powered image enhancement tool built with React, allowing users to drag and drop images for instant quality improvement. The app uses advanced AI processing to upscale, sharpen, and enhance image clarity with a seamless and interactive user experience.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "AI",
      color: "green-text-gradient",
    },
    {
      name: "TailwindCSS",
      color: "pink-text-gradient",
    },
  ],
  image: aiEnhancer, // add your image import
  source_code_link: "https://github.com/Manishj2002/react-ai-image-enhancer", // update if needed
},

{
  name: "AI Code Reviewer",
  description:
    "A smart code review tool built using the Gemini AI API, allowing developers to paste or upload code for instant feedback. The app analyzes code quality, detects errors, and provides improvement suggestions, helping developers write cleaner and more optimized code.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "GeminiAI",
      color: "green-text-gradient",
    },
    {
      name: "TailwindCSS",
      color: "pink-text-gradient",
    },
  ],
  image: codeReview, // add your image import
  source_code_link: "https://github.com/Manishj2002/code-review", // update only if repo name is different
},

    
  ];
  
  export { services, technologies, experiences, testimonials, projects };