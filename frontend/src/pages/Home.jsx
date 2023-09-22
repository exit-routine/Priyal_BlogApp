import React from "react";
import orv from "../assets/ill-brg.png"
import bg from "../assets/bg.png"
import './Home.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();
  const handleExploreClick = () =>{
    navigate('/novels');
  }
  return (
    <div className="home" style={{
      backgroundImage: `url(${bg})`, backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'strech'
    }}>
      <Navbar/>
      <div className="home-container" >
        <div className="book-container">
          <div className="blog-name">
            <h1>BOOK-O-TOPIA</h1>
          </div>
          <div className="welcome-container">
            <h1>Welcome to Book-o-Topia</h1>
          </div>
          <div className="wel-msg-container">
            <h2>
              Well, as the name suggests it’s a blog for those who enjoys books, manga and anime.
            </h2>
            <div className="wel-msg-italic">
              <h3>
                PS : People can lose their lives in libraries. You have been warned.
              </h3>
            </div>
          </div>
          <div className="see-novels-container">
            <Button onClick={handleExploreClick}variant="contained" sx={{
              marginTop: '50px',
              fontSize: '24px',
              backgroundColor: '#E5BDC6',
              color: 'black',
              fontFamily: 'Paprika',
              '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid black' }
            }}>
              EXPLORE
            </Button>
          </div>
        </div>
        <div className="img-container" >
          <img src={orv} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;