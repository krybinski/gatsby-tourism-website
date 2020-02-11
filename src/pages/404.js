import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import styles from '../css/error.module.css';

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops, page does not exists!">
          <AniLink paintDrip hex="#0984e3" to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default error;
