import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, Typography, CardActions } from "@mui/material";
import { toast } from 'react-toastify'; 
import Navbar from "../components/Navbar";

const Novel = () => {
  const { id } = useParams();
  const [novel, setNovel] = useState(null);
  const navigate = useNavigate();

  const fetchNovel = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/novels/${id}`);
      if (res.data.success) {
        setNovel(res.data.novel);
      } else {
        toast.error("Error fetching novel");
      }
    } catch (error) {
      toast.error('Error fetching novel details:', error);
    }
  };

  const handleEditClick = () => {
    navigate(`/novels/${id}/edit`);
  };

  const handleDeleteClick = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/novels/${id}`);
      if (res.data.success) {
        console.log("Blog deleted successfully");
        setNovel(null);
        navigate('/novels');
        toast.success("Novel Blog deleted successfully")
      }
      else {
        toast.error("error");
      }
    } catch (error) {
      toast.error(error);
    }

  };

  useEffect(() => {
    fetchNovel();
  }, [id]);

  if (!novel) {
    return <div display='flex' justifyContent='center'><h1>Novel Not Found</h1></div>;
  }

  return (
    <div novel-container>
      <Navbar />
      <Box border={1}
        borderColor="gray"
        borderRadius={2}
        boxShadow={3}
        p={3}
        m={3}
        marginTop={15}
        textAlign="center">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 30 }} color="black" gutterBottom>
              {novel.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by {novel.author}
            </Typography>
            <Typography variant="body2">
              {novel.blog}
            </Typography>
          </CardContent>
          <Box>
            <Box sx={{ marginBottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CardActions>
                <Button sx={{
                  fontSize: '24px',
                  backgroundColor: '#E5BDC6',
                  color: 'black',
                  fontFamily: 'Paprika',
                  '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
                }} variant="contained" onClick={handleEditClick}>Edit</Button>
              </CardActions>
              <CardActions>
                <Button sx={{
                  fontSize: '24px',
                  backgroundColor: '#E5BDC6',
                  color: 'black',
                  fontFamily: 'Paprika',
                  '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
                }} variant="contained" onClick={handleDeleteClick}>Delete</Button>
              </CardActions>

            </Box>
          </Box>

        </Card>
      </Box>

    </div>
  );
};

export default Novel;
