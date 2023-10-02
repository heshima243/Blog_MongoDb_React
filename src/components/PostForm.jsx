import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// material ui
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addPost, getPost } from "../reduxComponent/actions/post.action";
import Typography from "@mui/material/Typography";

import edithPost from "../css material ui/edithPost";

const PostForm = () => {
  const { FormContainer, InputField, SubmitButton } = edithPost;

  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  let navigate = useNavigate();

  window.scrollTo(0, 0);
  
  const handleForm = async (e) => {
    e.preventDefault();

    const tmp_date = new Date().toISOString().split('T');
    const date =`${tmp_date[0]} ${tmp_date[1]}`;

    const title = form.current.title.value;


    const postData = {
      date:date,
      author: author,
      image: image,
      title: title,
      body: body, 
      likes: 0,
    };

    await dispatch(addPost(postData));
    dispatch(getPost());
    // form.current.reset();
    setBody("");
    setTitle("");
    setAuthor("")
    navigate("/");
  };

  return (
    <div>
      <FormContainer ref={form} onSubmit={(e) => handleForm(e)}>
        <Typography variant="h4" color="initial">
          Post a Content
        </Typography>
        {/* <InputField
          style={{ marginBottom: "16px" }}
          label="your name"
          variant="outlined"
          fullWidth
          required
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        /> */}
        <InputField
          style={{ marginBottom: "16px" }}
          label="copy adress image like that https://i.pinimg.com/564x/804e602ac2a29.jpg"
          variant="outlined"
          fullWidth
          required
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />
        <InputField
          style={{ marginBottom: "16px" }}
          label="title of article"
          variant="outlined"
          fullWidth
          required
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // value={post.title}
        />
        <TextField
          label="body of your article"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <SubmitButton
          style={{ marginTop: "16px" }}
          type="submit"
          variant="contained"
          color="success"
        >
          Envoyer
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default PostForm;
