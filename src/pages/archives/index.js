import React from "react";
import kebabCase from "lodash/kebabCase";
import {Helmet} from "react-helmet";
import { Link } from "gatsby";
import profilePic from "../../components/profile-big.jpg";
import Layout from "../../components/layout"
import { graphql } from "gatsby";

const ArchivesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title, description, siteUrl }
    }
  }
}) => (
  <Layout>
    <Helmet title={`Archives | ${title}`}>
      <meta name="description" content={description} />

      <meta property="og:title" content={`Archives | ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteUrl + profilePic} />
      <meta property="og:url" content={siteUrl + "/archives/"} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="fb:app_id" content="2072264049710958" />

      <meta name="twitter:creator" content="@vojtechruzicka" />
      <meta name="twitter:site" content="@vojtechruzicka" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`Archives | ${title}`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
    <div>
      <h1>Archives</h1>
      <ul>
        {group
          .sort((a, b) => {
            //TODO do sorting in graphql
            return b.totalCount - a.totalCount;
          })
          .map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
      </ul>
    </div>
  </Layout>
);

export default ArchivesPage;

export const pageQuery = graphql`
  query ArchivesQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
