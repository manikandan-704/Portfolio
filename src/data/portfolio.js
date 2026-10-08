export const portfolioData = {
  about: {
    name: "Manikandan N",
    role: "Software Engineer",
    tagline: "Building scalable backend services and dynamic frontends to solve real-world problems.",
    location: "Madurai, TamilNadu",
    bio: "I'm a Computer Science & Design graduate with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. I enjoy building distributed, event-driven microservices and dynamic user interfaces. My focus is on writing clean, tested, maintainable code and building products at scale.",
    email: "nagarajpriyan2004@gmail.com",
    phone: "+91 9123531598",
    socials: {
      github: "https://github.com/manikandan-704",
      linkedin: "https://linkedin.com/in/manikandan704",
      portfolio: "#" // TODO: Add live portfolio URL once deployed
    },
    skills: {
      "Languages": ["Java", "Python", "JavaScript", "SQL"],
      "Frontend": ["React.js", "React Router", "HTML5", "CSS3", "Bootstrap", "Axios", "Responsive Design"],
      "Backend": ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Spring Cloud", "Node.js", "Express.js", "REST APIs"],
      "Architecture & Security": ["Microservices", "Event-Driven", "JWT", "Keycloak", "RBAC"],
      "Databases & Messaging": ["MySQL", "PostgreSQL", "MongoDB", "RabbitMQ"],
      "Tools & Testing": ["Git", "GitHub", "Maven", "Docker", "CI/CD", "Postman", "JUnit", "Mockito", "E2E Testing"],
      "Core CS": ["Data Structures", "Algorithms", "OOP", "SOLID", "System Design", "DBMS", "OS", "Networks"]
    }
  },
  projects: [
    {
      title: "FiTracker",
      summary: "AI-Powered Distributed Tracking Platform with fault-tolerant microservices.",
      techStack: ["Spring Boot", "RabbitMQ", "React.js", "PostgreSQL", "MongoDB", "Keycloak", "Gemini API"],
      liveLink: "#", // TODO: Add live link
      repoLink: "https://github.com/manikandan-704/fitracker", // TODO: verify repo link
      image: "/assets/projects/fitracker.jpg", // TODO: Add project image to public/assets/projects/
      details: [
        "Architected a fault-tolerant microservices platform using Spring Cloud Gateway and Eureka with a database-per-service design.",
        "Integrated Keycloak (OAuth2/OIDC) for centralized authentication and role-based authorization.",
        "Replaced synchronous REST calls with RabbitMQ event-driven communication, improving throughput.",
        "Integrated the Google Gemini API for AI-powered health insights."
      ]
    },
    {
      title: "DutyFixIt",
      summary: "Service Booking Platform with multi-portal role-based access.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      liveLink: "#", // TODO: Add live link
      repoLink: "https://github.com/manikandan-704/dutyfixit", // TODO: verify repo link
      image: "/assets/projects/dutyfixit.jpg", // TODO: Add project image to public/assets/projects/
      details: [
        "Built a multi-portal application for Client, Worker and Admin workflows with role-based access control.",
        "Designed and developed 10+ RESTful APIs for booking, authentication and user management.",
        "Implemented dual-token JWT authentication with silent refresh using Axios interceptors.",
        "Optimized MongoDB aggregation pipelines and indexing, reducing read operations by over 60%."
      ]
    }
  ],
  experience: [
    {
      role: "Web Developer Intern",
      company: "Xplo Code Pvt Ltd",
      location: "Madurai",
      period: "May 2025 – Jun 2025",
      description: "Converted UI/UX wireframes into responsive, interactive front-end components using HTML5, CSS3 and JavaScript. Improved page load speed through semantic HTML and clean, optimized CSS. Worked in an Agile team using Git for version control and delivered milestones on schedule."
    }
  ],
  education: [
    {
      degree: "B.E., Computer Science & Design",
      institution: "Sethu Institute of Technology, Virudhunagar",
      period: "2022 – 2026",
      details: "CGPA: 7.1 / 10"
    }
  ],
  certifications: [
    {
      name: "Java Programming",
      issuer: "Intellipaat",
      date: "2023", // TODO: verify date
      credentialId: "TODO", // TODO: Add credential ID
      url: "#", // TODO: Add verification URL
      image: "/assets/certs/java.jpg", // TODO: Add certificate image
      category: "Programming"
    },
    {
      name: "Introduction to Generative AI & Responsible AI Principles",
      issuer: "Google Cloud",
      date: "2024", // TODO: verify date
      credentialId: "TODO", // TODO: Add credential ID
      url: "#", // TODO: Add verification URL
      image: "/assets/certs/google-ai.jpg", // TODO: Add certificate image
      category: "AI"
    },
    {
      name: "TCS National Qualifier Test (NQT)",
      issuer: "TCS",
      date: "2026",
      credentialId: "TODO", // TODO: Add credential ID
      url: "#", // TODO: Add verification URL
      image: "/assets/certs/tcs-nqt.jpg", // TODO: Add certificate image
      category: "Assessment",
      details: "Overall 69.18% (2075.26/3000); Foundation Section 74.21% (1335.72/1800)"
    }
  ]
};
