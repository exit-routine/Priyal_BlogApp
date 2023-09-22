import React, { useState, useEffect } from "react";
import { Typography, Container, Card, CardContent, CardActions, TextField, Button } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import Navbar from "./Navbar";


const EditNovel = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    blog: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/novels/${id}`);
        if (res.data.success) {
          const novelData = res.data.novel;
          setFormData({
            title: novelData.title,
            author: novelData.author,
            blog: novelData.blog,
          });
        } else {
          toast.error("Error fetching novel data"); // Use toast.error for displaying an error
        }
      } catch (error) {
        toast.error(error.message); // Use toast.error for displaying an error
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleUpdateClick = async (event) => {
    event.preventDefault();

    if (formData.title.trim() === '') {
      toast.error("Title can't be blank");
    } else if (formData.title.length < 3) {
      toast.error("Title must be at least 3 characters long");
    } else if (formData.title.length > 100) {
      toast.error("Title can't exceed 100 characters");
    }

    if (formData.author.trim() === '') {
      toast.error("Author can't be blank");
    } else if (formData.author.length < 3) {
      toast.error("Author must be at least 3 characters long");
    } else if (formData.author.length > 100) {
      toast.error("Author can't exceed 100 characters");
    }

    if (formData.blog.trim() === '') {
      toast.error("Blog can't be blank");
    } else if (formData.blog.length < 10) {
      toast.error("Blog must be at least 10 characters long");
    } else if (formData.blog.length > 500) {
      toast.error("Blog can't exceed 100 characters");
    }

    try {
      const res = await axios.put(`http://localhost:3000/novels/${id}`, formData);
      if (res.data.success) {
        navigate(`/novels/${id}`);
        toast.success('Novel Blog updated successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        // toast.success("Novel updated successfully"); // Use toast.success for a success message
      } else {
        toast.error("Error updating novel"); // Use toast.error for displaying an error
      }
    } catch (error) {
      toast.error(error.message); // Use toast.error for displaying an error
    }
  };

  return (

    <div className="edit-blog-container">
      <Navbar />
      <Container maxWidth='xl' sx={{
        backgroundColor: '#E5BDC6',
        marginTop: '7%'
      }}>
        <Typography fontFamily={'Jua'} textAlign={"center"} fontSize={32}>
          Edit Novel Blog
        </Typography>
      </Container>
      <Container sx={{
        width: '100',
        marginTop: '2%'
      }}  >
        <Card >
          <form onSubmit={handleUpdateClick} >
            <CardContent>
              <TextField
                onChange={(e) => handleChange(e, 'title')}
                value={formData.title}
                fullWidth id="title"
                label="Title"
                variant="outlined"
                margin="dense"
                padding="dense" />
              <TextField onChange={(e) => handleChange(e, 'author')}
                value={formData.author} fullWidth id="author" label="Author" variant="outlined" margin="dense" />
              <TextField onChange={(e) => handleChange(e, 'blog')}
                value={formData.blog} fullWidth id="blog" label="Blog" variant="outlined" multiline
                maxRows={500} margin="dense" />
            </CardContent>
            <CardActions>
              <Button type={"submit"} variant="contained" sx={{
                fontSize: '24px',
                backgroundColor: '#E5BDC6',
                color: 'black',
                fontFamily: 'Paprika',
                '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
              }}>
                Update
              </Button>
            </CardActions>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default EditNovel;
