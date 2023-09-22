import { Box, Container, Card, CardContent, CardActions, TextField, Button, AppBar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
import Navbar from "./Navbar";

const CreateNovel = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: '',
    author: '',
    blog: '',
  })
  const handleChange = (event, field) => {
    setData({ ...data, [field]: event.target.value })
  }

  const create = async (event) => {
    event.preventDefault()

    if (data.title.trim() === '') {
      toast.error("Title can't be blank");
    } else if (data.blog.length < 3) {
      toast.error("Title must be at least 3 characters long");
    } else if (data.blog.length > 100) {
      toast.error("Title can't exceed 100 characters");
    }

    if (data.author.trim() === '') {
      toast.error("Author can't be blank");
    } else if (data.blog.length < 3) {
      toast.error("Author must be at least 3 characters long");
    } else if (data.blog.length > 100) {
      toast.error("Author can't exceed 100 characters");
    }

    if (data.blog.trim() === '') {
      toast.error("Blog can't be blank");
    } else if (data.blog.length < 10) {
      toast.error("Blog must be at least 5 characters long");
    } else if (data.blog.length > 500) {
      toast.error("Blog can't exceed 100 characters");
    }


    try {
      const API_URL = "http://localhost:3000/novels"

      const res = await axios.post(API_URL, { "novel": data })

      if (res.data.success) {
        const newId = res.data.id;
        navigate(`/novels/${newId}`)
        toast.success("Blog created successfully")
      } else {
        toast.error("Error")
      }
    } catch (e) {
      navigate('/')
      toast.error({ e })
    }
  }

  return (
    <div>
      <Navbar/>
      <Container maxWidth='xl' sx={{
        backgroundColor: '#E5BDC6',
        marginTop: '7%'
      }}>
        <Typography fontFamily={'Jua'} textAlign={"center"} fontSize={32}>
          Create Novel Blog
        </Typography>
      </Container>
      <Container sx={{
        width: '100',
        marginTop: '2%'
      }}  >
        <Card >
          <form onSubmit={create} >
            <CardContent>
              <TextField onChange={(e) => handleChange(e, 'title')} value={data.title} fullWidth id="title" label="Title" variant="outlined" margin="dense" padding="dense" />
              <TextField onChange={(e) => handleChange(e, 'author')} value={data.author} fullWidth id="author" label="Author" variant="outlined" margin="dense" />
              <TextField onChange={(e) => handleChange(e, 'blog')} value={data.blog} fullWidth id="blog" label="Blog" variant="outlined" multiline
                maxRows={500} margin="dense" />
            </CardContent>
            <CardActions >

              <Button type={"submit"} variant="contained" sx={{
                fontSize: '24px',
                backgroundColor: '#E5BDC6',
                color: 'black',
                fontFamily: 'Paprika',
                '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
              }}>
                Create
              </Button>
            </CardActions>`
          </form>
        </Card>

      </Container>
      {/* </Base> */}
    </div>
  );
}

export default CreateNovel;