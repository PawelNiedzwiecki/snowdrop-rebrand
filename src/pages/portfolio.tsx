import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About = ({ data }: PageProps<Queries.AboutQuery>) => {
  const [bigView, setbigView] = useState(false);
  // const typesOfMakeup = [
  //   {
  //     name: 'bridal',
  //   },
  //   {
  //     name: 'stage',
  //   },
  //   {
  //     name: 'prom',
  //   },
  //   {
  //     name: 'photo session',
  //   },
  //   {
  //     name: 'party',
  //   },
  //   {
  //     name: 'evening',
  //   },
  // ];

  return (
    <Layout>
      <button
        className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
        onClick={() => setbigView(!bigView)}
      >
        switch cols
      </button>
      <div
        className={`mx-auto grid max-w-screen-xl items-stretch gap-4 px-4 py-8 ${
          bigView ? 'grid-cols-2' : 'grid-cols-4'
        } lg:px-6 lg:py-16`}
      >
        {data?.allFile?.edges?.map((edge) => {
          const image = getImage(edge.node);
          return (
            <div key={image?.layout}>
              <GatsbyImage
                className="img-wrap h-full"
                image={image}
                alt="Dominika"
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default About;

export const query = graphql`
query About {
  allFile(filter: {extension: {eq: "jpg"}, name: {regex: "/^DSC\\d+/"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
}
`;

export const Head: HeadFC = () => <Seo title="Portfolio" />;
