import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Tips from '../components/Home/Tips';

const Home = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Tourism website"
          info="Welcome on one of the bigges tourism websites worldwide."
        >
          <Link to="/places" className="btn-white">
            explore places
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Tips />
    </Layout>
  );
};

export default Home;
