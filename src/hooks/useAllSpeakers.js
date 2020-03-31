import { useStaticQuery, graphql } from 'gatsby';

const useAllSpeakers = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            speakers(where: {orderby: SLUG, hideEmpty: true}) {
                edges {
                    node {
                        id
                        name
                        speakers {
                            shortBio
                            speakerImage {
                                mediaDetails {
                                    file
                                }
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

export default useAllSpeakers;