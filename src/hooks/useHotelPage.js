import { useStaticQuery, graphql } from 'gatsby';

const useHotelPage = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            pages(where: {id: 99}) {
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

export default useHotelPage;