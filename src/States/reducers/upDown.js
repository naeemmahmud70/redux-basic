const initialState = 10;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.payload;
    case "Decrement":
      return state - 5;
    default:
      return state;
  }
};

export default changeTheNumber