import React from 'react'
import videoHome from "../../../assets/videos/video.mp4"
import './Home.css';
import { Button } from 'react-bootstrap';
function Home() {
  return (
    <div className='hero-container'>
        <video src={videoHome} autoPlay loop muted/>
        <h1>FUGONASO LABS</h1>
        <p>NFT COLECTION</p>
        <div className='button'>
            <Button className="btn" id="button-home">DESCUBRELO</Button>
        </div>
    </div>
  )
}

export default Home