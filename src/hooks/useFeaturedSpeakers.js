import { useStaticQuery, graphql } from 'gatsby';

const useFeaturedSpeakers = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            speakers(where: {orderby: SLUG, hideEmpty: true}, first: 4) {
                edges {
                    node {
                        id
                        name
                        speakers {
                            shortBio
                            speakerImage {
                                sourceUrl
                            }
                        }
                        speakerId
                        taxonomy {
                            id
                        }
                        slug
                        count
                        description
                    }
                }
            }
        }
    }
    `);

    return sectionData.wpgraphql.speakers.edges;
}

export default useFeaturedSpeakers;