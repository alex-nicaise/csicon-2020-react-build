import { useStaticQuery, graphql } from 'gatsby';

const useSaturdaySchedule = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            events(where: {categoryName: "4-saturday-october-17th"}) {
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

export default useSaturdaySchedule;