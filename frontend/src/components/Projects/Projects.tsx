import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts for multiple cities with beautiful visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Weather API', 'Chart.js', 'CSS3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, comment system, and admin dashboard for content management.',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MySQL', 'Markdown'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills with smooth animations and modern design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'CSS Modules', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and emoji support built with Socket.io.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <div key={index} className={styles.featuredProject}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className={styles.otherProjectsSection}>
          <h3 className={styles.sectionTitle}>Other Projects</h3>
          <div className={styles.projectsGrid}>
            {otherProjects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.cardImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{project.title}</h4>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.cardTechnologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.cardTech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.cardLinks}>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;