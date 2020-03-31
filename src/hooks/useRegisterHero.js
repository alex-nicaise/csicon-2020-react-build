import { useStaticQuery, graphql } from 'gatsby';

const useRegisterHero = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            pages(where: {name: "home"}) {
                edges {
                    node {
                        content
                        featuredImage {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
    `);

    return sectionData.wpgraphql.pages.edges[0].node;
}

export default useRegisterHero;