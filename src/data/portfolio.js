export const profileData = {
  name: 'Sravani V',
  title: 'AI Engineer | Technical Mentor | Full Stack Developer',
  tagline: 'AI Engineer with 5+ years of industry experience in building scalable solutions',
  email: 'techhubelearning@gmail.com',
  phone: '+91 8971940473',
  location: 'Bangalore, India',
  bio: 'Passionate about AI/ML, Full Stack Development, and Technical Mentoring. Helping aspiring developers master industry-relevant skills through hands-on training and real-world projects.',
  profileImage: '/profile.jpg',
  resume: '/resume.pdf',
  github: 'https://github.com/techhubelearning',
  linkedin: 'https://www.linkedin.com/in/shravani-v-70b403192',
  twitter: 'https://twitter.com/techhubelearning',
}

export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Experience', href: '#experience' },
  { id: 4, name: 'Skills', href: '#skills' },
  { id: 5, name: 'Projects', href: '#projects' },
  { id: 6, name: 'Teaching', href: '#teaching' },
  { id: 7, name: 'Certifications', href: '#certifications' },
  { id: 8, name: 'Contact', href: '#contact' },
]

export const aboutData = {
  title: 'About Me',
  description: 'I am an AI Engineer with a passion for building intelligent systems and mentoring aspiring developers. With 5+ years of industry experience, I have worked on diverse projects ranging from machine learning pipelines to full-stack web applications.',
  highlights: [
    'Developed and deployed ML models in production environments',
    'Mentored 500+ students in AI/ML and Full Stack Development',
    'Built scalable backend systems handling 1M+ requests daily',
    'Expert in Python, JavaScript, and cloud technologies',
  ],
}

export const experienceData = [
  {
    id: 1,
    company: 'AI Solutions Inc',
    position: 'Senior AI Engineer',
    period: '2021 - Present',
    description: 'Leading ML team to develop and deploy AI solutions. Architected scalable ML pipelines and mentored junior engineers.',
    achievements: [
      'Deployed 15+ ML models in production',
      'Reduced inference time by 40%',
      'Mentored 10+ junior engineers',
    ],
  },
  {
    id: 2,
    company: 'Tech Startup Co',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed full-stack web applications using React, Node.js, and MongoDB. Implemented real-time features and optimized database queries.',
    achievements: [
      'Built dashboard used by 50K+ users',
      'Improved API response time by 60%',
      'Led frontend architecture migration',
    ],
  },
  {
    id: 3,
    company: 'Educational Platform',
    position: 'Technical Mentor',
    period: '2019 - Present',
    description: 'Teaching AI/ML, Full Stack Development, and Python programming to aspiring developers through live interactive sessions and project-based learning.',
    achievements: [
      'Mentored 500+ students',
      '95% student satisfaction rate',
      'Helped 200+ students get jobs in tech',
    ],
  },
]

export const skillsData = {
  programming: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  backend: ['Node.js', 'Express', 'Django', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
  tools: ['Git', 'Docker', 'Jenkins', 'VS Code', 'Jupyter', 'Linux'],
}

export const projectsData = [
  {
    id: 1,
    title: 'AI Chat Application',
    description: 'An intelligent chatbot powered by GPT and NLP, deployed on AWS Lambda. Features real-time responses and conversation memory.',
    image: 'https://via.placeholder.com/300x200?text=AI+Chat',
    technologies: ['Python', 'FastAPI', 'React', 'AWS', 'PostgreSQL'],
    github: 'https://github.com/techhubelearning/ai-chat',
    demo: 'https://ai-chat-demo.com',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Handles 100K+ transactions daily.',
    image: 'https://via.placeholder.com/300x200?text=E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
    github: 'https://github.com/techhubelearning/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    id: 3,
    title: 'ML Sentiment Analysis',
    description: 'Machine learning model for sentiment analysis of social media posts with 92% accuracy. Trained on 1M+ reviews dataset.',
    image: 'https://via.placeholder.com/300x200?text=ML+Sentiment',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Scikit-learn', 'Flask'],
    github: 'https://github.com/techhubelearning/sentiment-analysis',
    demo: 'https://sentiment-analysis-demo.com',
  },
  {
    id: 4,
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization with WebSocket support. Displays metrics and analytics from multiple data sources.',
    image: 'https://via.placeholder.com/300x200?text=Dashboard',
    technologies: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis'],
    github: 'https://github.com/techhubelearning/analytics-dashboard',
    demo: 'https://analytics-dashboard-demo.com',
  },
  {
    id: 5,
    title: 'IoT Monitoring System',
    description: 'IoT platform for monitoring sensors and devices in real-time. Features cloud sync, alerting, and mobile app support.',
    image: 'https://via.placeholder.com/300x200?text=IoT',
    technologies: ['Python', 'Arduino', 'Cloud Functions', 'React Native', 'Firebase'],
    github: 'https://github.com/techhubelearning/iot-monitoring',
    demo: 'https://iot-monitoring-demo.com',
  },
  {
    id: 6,
    title: 'Personal Finance App',
    description: 'Budget tracking and expense management app with AI-powered spending insights and financial recommendations.',
    image: 'https://via.placeholder.com/300x200?text=Finance',
    technologies: ['React', 'Python', 'Machine Learning', 'Firebase', 'Stripe'],
    github: 'https://github.com/techhubelearning/finance-app',
    demo: 'https://finance-app-demo.com',
  },
]

export const teachingStats = [
  {
    icon: '👨‍🎓',
    number: 500,
    label: 'Students Mentored',
  },
  {
    icon: '⭐',
    number: 95,
    label: 'Student Satisfaction %',
  },
  {
    icon: '💼',
    number: 200,
    label: 'Jobs Placed',
  },
]

export const subjects = [
  'Python Programming',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'React & Modern JavaScript',
  'Node.js & Backend Development',
  'Full Stack Development',
  'Cloud Computing (AWS/GCP)',
  'Data Structures & Algorithms',
  'System Design',
  'Interview Preparation',
]

export const certificationsData = [
  {
    id: 1,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2023',
    image: 'https://via.placeholder.com/150x150?text=TensorFlow',
  },
  {
    id: 2,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
    image: 'https://via.placeholder.com/150x150?text=AWS',
  },
  {
    id: 3,
    title: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    year: '2022',
    image: 'https://via.placeholder.com/150x150?text=GCP',
  },
  {
    id: 4,
    title: 'Advanced Machine Learning',
    issuer: 'Andrew Ng - Coursera',
    year: '2022',
    image: 'https://via.placeholder.com/150x150?text=ML',
  },
]
