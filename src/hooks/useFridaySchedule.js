import { useStaticQuery, graphql } from 'gatsby';

const useFridaySchedule = (date) => {

    const sectionData = useStaticQuery(graphql`
    {
        wpgraphql {
            events(where: {categoryName: "3-friday-october-18th"}) {
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

export default useFridaySchedule;