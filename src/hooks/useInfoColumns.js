import { useStaticQuery, graphql } from 'gatsby';

const useRegisterHero = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            posts {
                edges {
                    node {
                        title
                        pageInfoBoxes {
                            excerpt
                            buttons {
                                buttonLink
                                buttonStyle
                                buttonText
                            }
                        }
                        featuredImage {
                            sourceUrl
                        }
                    }
                }
              }
        }
    }
    `);

    return sectionData.wpgraphql.posts.edges;
}

export default useRegisterHero;