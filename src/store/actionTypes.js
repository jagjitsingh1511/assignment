const prefix = '@@demo';

let actionTypes = {
  ADD_ARRAY: 'ADD_ARRAY',
  SET: 'SET',
  GET_USERNAME: 'GET_USERNAME',
};

Object.keys(actionTypes).forEach(
  (key) => (actionTypes[key] = `${prefix}/${actionTypes[key]}`)
);

export default actionTypes;
