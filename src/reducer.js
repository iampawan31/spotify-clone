export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQAfqi0lN9CSYuhjgxMKsUFCIwYneFToizGiAo4CtNdZpGTG6b6dOx1Q7OTcHvRia7ZVVQ-CwYu1Bb8lAq_hYLSfJCor6BmBkIseP5FLx6qOJwhwPTdlGeTPj0kq-pLPv9z3cAFAJzuO3lLNyUsMdKetqsyjByM',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default reducer;
