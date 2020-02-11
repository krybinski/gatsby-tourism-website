import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaAlignRight } from 'react-icons/fa';
import styles from '../css/navbar.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => setNav(isOpen => !isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <span className={styles.brandLogo}>TOURISM WEBSITE</span>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink paintDrip hex="#0984e3" to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            );
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
