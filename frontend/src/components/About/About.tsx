import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Learner',
      description: 'Always eager to learn new technologies'
    },
    {
      icon: <Heart size={24} />,
      title: 'Passionate',
      description: 'Love creating solutions that matter'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Dedicated',
      description: 'Committed to delivering quality work'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. My journey in web development started with 
              curiosity and has grown into a deep passion for solving complex problems 
              through code.
            </p>
            <p className={styles.description}>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <div className={styles.highlightIcon}>
                    {highlight.icon}
                  </div>
                  <div className={styles.highlightContent}>
                    <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                    <p className={styles.highlightDescription}>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Working on laptop" 
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h3>Always Learning</h3>
                  <p>Staying curious and growing every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;