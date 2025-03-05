import React from 'react';
import '../components/Style.css';
import Github from "../components/pages/images/media.png";
// import Github from "../components/pages/images/media.png";
import {  Image, Card, Button } from "react-bootstrap";
import LinkedIn from "../components/pages/images/Linkedin.png";

const GitLinkIn = () => {
    return <div>
        
            
                <Card className="git">
                    <Image className="git" src={Github}></Image>
                    <Button className="git" href="https://github.com/Maneira3232">Github</Button>
                </Card>
            
        
            
                <Card className="LinkIn" >
                    <Image className="LinkIn" src={LinkedIn}></Image>
                    <Button className="LinkIn" href="https://www.linkedin.com/in/jmaneira/">LinkedIn</Button>
                </Card>
            
            

    </div>
};

export default GitLinkIn;