import { FETCH_MOVIE_SUCCESS } from "../actions";

const initState = [];
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return action.data;
    default:
      return state;
  }
};
