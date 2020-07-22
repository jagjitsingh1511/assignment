const getActions = (type, payload = {}, error = {}, meta = {}) => {
  return {
    type,
    payload,
    error,
    meta,
  };
};

export default getActions;
