import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'SNACK',
    description: 'A canteen ordering system developed using Django, featuring menu management, a Python-based backend(DJANOG), HTML/CSS frontend, and SQLite for data storage.',
    image: '/Portfolio/Snack.png',
    technologies: ['Django', 'HTML', 'CSS', 'Python', 'SQLite'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/SubhasyaTippareddy/snack',
  },
  {
    id: 2,
    title: 'Tic Tac Toe with a Twist',
    description: 'A Flask + JavaScript game where players take turns on a 3x3 grid, but only three marks per player can exist at a time. Placing a fourth removes the oldest. The game checks for a win after every move. Runs locally on Flask.',
    image: '/Portfolio/twisted.png',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    liveUrl: 'https://twisted-tic-tac-toe.onrender.com/',
    sourceUrl: 'https://github.com/ArvindReddy-Bobbili/Twisted_Tic_tac_Toe',
  },
  {
    id: 3,
    title: 'Hospital-Ventilator-Management-API',
    description: 'Hospital and ventilator records are managed by this Node.js microservice, which uses Express for API routing, MongoDB for database storage, and secures routes with JSON Web Tokens (JWT).',
    image: '/Portfolio/Hospital.png',
    technologies: ['API routing', 'MongoDB', 'Node.js', 'JSON Web Tokens'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/ArvindReddy-Bobbili/Hospital-Ventilator-Management-API',
  },
  {
    id: 4,
    title: 'Network - GA - Optimizer',
    description: 'This project uses a Genetic Algorithm to optimize load balancing across multiple simulated servers in real-time, focusing on metrics like latency, throughput, error rate, and load balance variance. It\'s containerized with Docker and offers observability using Prometheus and Grafana.',
    image: '/Portfolio/Network-GA.png',
    technologies: ['Python', 'Grafana', 'Prometheus', 'Docker'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/Anmol-Bhatta/network-ga-optimizer',
  },
  {
    id: 5,
    title: 'Focus Guardian - AI-Powered Distraction Detection App',
    description: 'Built using JavaScript, HTML, and CSS, this browser-based app leverages MediaPipe Face Mesh for eye tracking and TensorFlow.js COCO-SSD for phone detection. It uses WebRTC, WebAssembly, Web Audio API, and the Notification API to deliver real-time, privacy-preserving distraction alerts directly in the browser. A Python-based or Node.js server supports local development.',
    image: '/Portfolio/Distraction.png',
    technologies: ['JavaScript', 'COCO-SSD', 'Web Audio', 'WebRTC', 'Node.js'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/ArvindReddy-Bobbili/AI-Powered-Distraction-Detection',
  },
];