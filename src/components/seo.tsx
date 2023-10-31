import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Seo = ({ title = 'Page' }) => {
  const data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data?.site?.siteMetadata?.title}
    </title>
  );
};

export default Seo;
