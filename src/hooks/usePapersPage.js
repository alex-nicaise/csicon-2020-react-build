import { useStaticQuery, graphql } from 'gatsby';

const usePapersPage = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            pages(where: {id: 236}) {
                edges {
                    node {
                        content
                    }
                }
            }
        }
    }
    `);

    return sectionData.wpgraphql.pages.edges[0];
}

export default usePapersPage;