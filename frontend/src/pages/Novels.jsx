import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NovelCard from "../components/NovelCard";
import { Button, Box, Container,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Novels.css'
import Navbar from "../components/Navbar";

const Novels = () => {
  const [novels, setNovels] = useState([]);
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate("/novels/new")
  }

  useEffect(() => {

    axios.get("http://localhost:3000/novels")
      .then((response) => {
        setNovels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching novels:", error);
      });
  }, []);

  return (
    <div className="novels">
      <Navbar />
      <Container maxWidth='xl' sx={{
        backgroundColor: '#E5BDC6',
        marginTop: '7%'
      }}>
        <Typography fontFamily={'Jua'} textAlign={"center"} fontSize={32}>
          List of Novels
        </Typography>
      </Container>
      <div className="novel-list" >
        {novels.map((novel) => (
          <NovelCard key={novel.id} novel={novel} />
        ))}
      </div>
      <div className="create-button">
        <Box sx={{
          marginTop: '10',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button sx={{
            fontSize: '24px',
            backgroundColor: '#E5BDC6',
            color: 'black',
            fontFamily: 'Paprika',
            '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
          }} variant="contained" onClick={handleCreateClick}>Create</Button>

        </Box>
      </div>
    </div>

  );
};

export default Novels;

