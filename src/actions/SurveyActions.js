export const surveyTopicVote = (vote, topic) => {
  return { type: 'vote', payload: { vote, topic } };
};