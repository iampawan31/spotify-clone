export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQCi1ePvvr9kkYPW79G0tbnNve3Hji20DBwa8LRUoXMrront0ZBSGKfJ8F6CJGoGCft7s8mmootevgCZnep5WwcOzohnH',
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
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;
