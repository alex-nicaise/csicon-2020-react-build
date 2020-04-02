import { useStaticQuery, graphql } from 'gatsby';

const useThursdaySchedule = () => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            events(where: {categoryName: "2-thursday-october-17th"}) {
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

export default useThursdaySchedule;