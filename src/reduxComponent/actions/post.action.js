import axios from "axios";


export const GET_POSTS="GET_POSTS"
export const ADD_POST="GET_POST"
export const EDIT_POST="EDIT_POST"
//export const ADD_POST_LIKE="EADD_POST_LIKE"
export const DELETE_POST="DELETE_POST"

// Action type


// Action creator
export const getPost = () => {
  return (dispatch) => {
    // Effectuez la requête HTTP à l'URL de l'API
    return axios.get("http://localhost:5000/list")
      .then((res) => {
        // Extract the "post" property from the response data
        const posts = res.data.post;
        
        // Dispatch the action with the extracted posts
        dispatch({ type: GET_POSTS, payload: posts });
    
      })
      .catch((error) => {
        // Gérez les erreurs ici si nécessaire
        console.error("Error fetching posts:", error);
      });
  };
};


export const addPost =(data)=>{
    return (dispatch)=>{
        return axios.post("http://localhost:5000/post",data)
        .then((res)=>{
           dispatch({type:ADD_POST, payload:data})
         console.log('success');
        }
    )
    .catch((error) => {
      // Gérez les erreurs ici si nécessaire
      console.error("Error logup posts:", error);
    });
  }
}



export const editPost = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:5000/updateList/${data.id}`, data) 
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: res.data });
        console.log("action edit:", res.data);
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };
};


export const deletePost =(postId)=>{
    return (dispatch)=>{
        return axios.get(`http://localhost:5000/delete/${postId}`)
        .then((res)=>{
           dispatch({type:DELETE_POST, payload:postId})
        }
    )}
}
