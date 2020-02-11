import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Tips from '../components/Home/Tips';

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  return (
    <Layout>
      <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Tourism website"
          info="Welcome on one of the bigges tourism websites worldwide."
        >
          <AniLink paintDrip hex="#0984e3" to="/places" className="btn-white">
            explore places
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Tips />
    </Layout>
  );
};

export default Home;
