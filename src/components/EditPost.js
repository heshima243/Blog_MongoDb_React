import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { editPost } from "../reduxComponent/actions/post.action";

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  margin: "0 auto",
  padding: "16px",
});
const InputField = styled(TextField)({
  marginBottom: "16px",
});
const SubmitButton = styled(Button)({
  marginTop: "16px",
});

const EditPost = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.postReducer.posts);

  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [EditAuthor, setEditAuthor] = useState("");
  const [EditImage, setEditImage] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const post = posts.find((post) => post._id === id);

  useEffect(() => {
    if (post) {
      setEditBody(post.body || "");
      setEditTitle(post.title || "");
      setEditAuthor(post.author || "");
      setEditImage(post.image || "");
    }
  }, [post]);

  const handleEdit = async (e) => {
    e.preventDefault();

    const postData = {
      author: EditAuthor,
      image: EditImage,
      title: editTitle,
      id: id, // Use the correct property name
      body: editBody,
    };
    await dispatch(editPost(postData));
    navigate("/");
  };

  if (!post) {
    return <Typography>No article found</Typography>;
  }
  return (
    <div>
      <FormContainer onSubmit={(e) => handleEdit(e)}>
        <Typography variant="h4" color="initial">
          Edit a Content
        </Typography>

        <InputField
          label="Title"
          variant="outlined"
          fullWidth
          name="title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          required
        />
{/* 
        <InputField
          label="Author"
          variant="outlined"
          fullWidth
          name="author"
          value={EditAuthor}
          onChange={(e) => setEditAuthor(e.target.value)}
          required
        /> */}

        <InputField
          label="Image URL"
          variant="outlined"
          fullWidth
          name="image"
          value={EditImage}
          onChange={(e) => setEditImage(e.target.value)}
          required
        />

        <TextField
          label="Content Body"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          name="body"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          required
        />

        <SubmitButton type="submit" variant="contained" color="success">
          Save Changes
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default EditPost;
