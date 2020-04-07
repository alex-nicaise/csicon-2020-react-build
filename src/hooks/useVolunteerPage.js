import { useStaticQuery, graphql } from 'gatsby';

const useVolunteerPage = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            pages(where: {id: 246}) {
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

export default useVolunteerPage;