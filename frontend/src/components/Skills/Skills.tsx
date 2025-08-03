import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 85, color: '#61dafb' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'TypeScript', level: 80, color: '#3178c6' },
        { name: 'CSS/SCSS', level: 85, color: '#1572b6' },
        { name: 'HTML5', level: 95, color: '#e34f26' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'Express', level: 75, color: '#000000' },
        { name: 'MongoDB', level: 70, color: '#47a248' },
        { name: 'PostgreSQL', level: 65, color: '#336791' },
        { name: 'REST APIs', level: 85, color: '#ff6b6b' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, color: '#f05032' },
        { name: 'VS Code', level: 90, color: '#007acc' },
        { name: 'Figma', level: 70, color: '#f24e1e' },
        { name: 'Docker', level: 60, color: '#2496ed' },
        { name: 'AWS', level: 55, color: '#ff9900' }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Here are the technologies I work with and my proficiency levels
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h4>Currently Learning</h4>
            <p>Next.js, GraphQL, React Native</p>
          </div>
          <div className={styles.infoCard}>
            <h4>Experience</h4>
            <p>2+ years of web development</p>
          </div>
          <div className={styles.infoCard}>
            <h4>Focus Areas</h4>
            <p>Full-stack development, UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;