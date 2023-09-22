import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import about from "../assets/about.png"

export default function AreaCard() {
  return (
    <Card sx={{ width:'100%', margin:'10', height: 'auto', backgroundColor: '#93BAE1' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={about}
          alt="hello"
          width='auto'
          height='auto'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'} fontSize={70}>
            Meet Priyal
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
