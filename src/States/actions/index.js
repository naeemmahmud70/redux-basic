export const incNumber = (num) => {
  return {
    type: "Increment",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "Decrement",
  };
};

export const True = () => {
  return{
    type: "True"
  }
};

export const False = () => {
    return{
      type: "False"
    }
  };
  