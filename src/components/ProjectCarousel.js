import React from 'react';
import '../components/Style.css';
// import Github from "../components/pages/images/media.png";
import Carousel from 'react-bootstrap/Carousel';
import PokeFinder from "../components/pages/images/PokeFinder.png";
import Hypo from "../components/pages/images/Hypo.png";
import mix from "../components/pages/images/Mixology-Masters.png";
import MrPassword from "../components/pages/images/mr.password.png";
import { Image, Button } from "react-bootstrap";



const ProjectCarousel = () => {
  
    return <div>

     <Carousel variant="dark" >
    <Carousel.Item className="carousel" interval={1000} >
      <Image className="CarouselImage" width={1150} height={500} alt="900x500" src={PokeFinder}></Image><div className="carousel-caption">
        <p className="text">
          <Button href="https://bchen41.github.io/PokeFinder/" variant="success">Explore Here</Button>
        </p>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image className="CarouselImage" width={1150} height={500} alt="900x500" src={MrPassword}></Image>
     <div className="carousel-caption">
        <p className="text">
          <Button href="https://maneira3232.github.io/Mr.Pass-Word/" variant="success">Explore Here </Button>
        </p>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image className="CarouselImage" width={1150} height={500} alt="900x500" src={Hypo}></Image>
     <div className="carousel-caption">
      <p className="text">
          <Button href="https://auction-pandemic-essentials.herokuapp.com/login" variant="success">Explore Here</Button>
        </p>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image className="CarouselImage" width={1150} height={500} alt="900x500" src={mix}></Image>
     <div className="carousel-caption">
      <p className="text">
          <Button href="https://mixology-masters.herokuapp.com/" variant="success">Explore Here</Button>
        </p>
      </div>
    </Carousel.Item>
  </Carousel>


    </div>

};

export default ProjectCarousel;