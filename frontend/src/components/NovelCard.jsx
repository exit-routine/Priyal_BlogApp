import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import orv from "../assets/orv.jpeg"

const NovelCard = ({ novel }) => {
  const navigate = useNavigate();
  const handleShowClick = () => {
    navigate(`/novels/${novel.id}`)
  }
  return (

    <div className="novel-card" >
      <Box
        sx={{
          width: '100%',
          maxWidth: '350px',
          margin: '10px',
        }}
      >
        <Card sx={{ width: '100%', margin: '20px', height: 'auto', border: '10px solid  black' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={orv}
              alt="hello"
              style={{ objectFit: 'cover', width: '350px', height: 'auto' }}
            />
            <CardContent>
              <Box sx={{ justifyContent: 'center', alignItems: 'center', }}>

                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}
                  sx={{
                    fontSize: '20px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    display: '-webkit-box',
                    WebkitLineClamp: 2, // Number of lines to show before truncating
                    WebkitBoxOrient: 'vertical',
                  }}>
                  {novel.title}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button sx={{
                  fontSize: '24px',
                  backgroundColor: '#E5BDC6',
                  color: 'black',
                  fontFamily: 'Paprika',
                  '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
                }} variant="contained" onClick={handleShowClick}>Show</Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
}





export default NovelCard;


