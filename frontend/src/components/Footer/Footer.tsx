import React from "react";
import { Heart, Code } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copyright}>
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          <div className={styles.center}>
            <p className={styles.madeWith}>
              Made with <Heart size={16} className={styles.heartIcon} /> and{" "}
              <Code size={16} className={styles.codeIcon} /> by a passionate
              developer
            </p>
          </div>

          <div className={styles.right}>
            <nav className={styles.footerNav}>
              <a href="#home" className={styles.footerLink}>
                Home
              </a>
              <a href="#products" className={styles.footerLink}>
                Products
              </a>
              <a href="#deals" className={styles.footerLink}>
                Deals
              </a>
              <a href="#about" className={styles.footerLink}>
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
