import { useStaticQuery, graphql } from 'gatsby';

const useSundaySchedule = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            events(where: {categoryName: "5-sunday-october-18th"}) {
                edges {
                    node {
                        title
                        content
                        speakers {
                            edges {
                                node {
                                    speakers {
                                        shortBio
                                        speakerImage {
                                            sourceUrl
                                        }
                                    }
                                    name
                                    speakerId
                                }
                            }
                        }
                        id
                        conferenceEvents {
                            displayEndTime
                            endTime
                            startTime
                            registrationNotes
                        }
                    }
                }
            }
        }
    } 
    `);

    return sectionData.wpgraphql.events;
}

export default useSundaySchedule;