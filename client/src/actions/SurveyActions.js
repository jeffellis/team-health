export const surveyTopicVote = (vote, topic) => {
  return { type: 'vote', payload: { vote, topic } };
};

export const  goToNextTopic = () => {
  return { type: 'nextTopic' };
}

export const  goToPreviousTopic = () => {
  return { type: 'previousTopic' };
}