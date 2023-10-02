import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../actions/post.action";

const initialState = { posts: [] };

export default function postReducer(state = initialState, action) {
  // switch
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
      case EDIT_POST:
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post._id === action.payload._id) {
              return {
                ...post,
                title: action.payload.title, 
                image: action.payload.image, 
                author: action.payload.author, 
                body: action.payload.body, 
              };
            } else {
              return post;
            }
          }),
        };
      
    case DELETE_POST:
      const postIdToDelete = action.payload;
      const updatedPosts = state.posts.filter(
        (post) => post._id !== postIdToDelete
      );
      return { ...state, posts: updatedPosts };
    default:
      return state;
  }
}
