export const Filter_dataSet = (sessionId) => {
  return {
    type: "LOAD_USER_SEARCH",
    payload: sessionId,
  };
};
