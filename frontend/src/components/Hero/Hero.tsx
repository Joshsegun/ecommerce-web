import React from 'react';
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const features = [
    { icon: <Truck size={20} />, text: 'Free Shipping' },
    { icon: <Shield size={20} />, text: 'Secure Payment' },
    { icon: <Zap size={20} />, text: 'Fast Delivery' },
    { icon: <Star size={20} />, text: 'Premium Quality' }
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <Star size={16} />
              <span>Premium Shopping Experience</span>
            </div>
            
            <h1 className={styles.title}>
              Discover Amazing
              <span className={styles.highlight}> Products</span>
              <br />
              That Define Your Style
            </h1>
            
            <p className={styles.description}>
              Explore our curated collection of premium products from top brands. 
              From cutting-edge electronics to stylish fashion, find everything 
              you need with unmatched quality and service.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Satisfaction</span>
              </div>
            </div>
            
            <div className={styles.buttons}>
              <a href="#products" className={styles.primaryButton}>
                Shop Now
                <ArrowRight size={20} />
              </a>
              <a href="#categories" className={styles.secondaryButton}>
                Browse Categories
              </a>
            </div>
            
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <div className={styles.mainImage}>
                <img 
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Premium Headphones" 
                  className={styles.heroImage}
                />
                <div className={styles.floatingCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardImage}>
                      <img 
                        src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200" 
                        alt="Smart Watch" 
                      />
                    </div>
                    <div className={styles.cardInfo}>
                      <h4>Smart Watch</h4>
                      <div className={styles.cardRating}>
                        <Star size={12} fill="currentColor" />
                        <span>4.8</span>
                      </div>
                      <p className={styles.cardPrice}>$249.99</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.backgroundElements}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;