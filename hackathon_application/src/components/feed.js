import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React, { useState,  useEffect} from "react";


const Feeds = (props) =>{
  return (
      <>
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        align = "left"
        title={props.title}
      />
      <CardMedia
        component="img"
        height="200"
        image="./imgs/air_pollution.png"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
      </>
  );
} 

export default function Feed(){
  const [projects, setProjects] = React.useState([])
  console.log("hi")
  useEffect(() => {
    const fetch_and_set = async () => {
        const response = await fetch('http://127.0.0.1:5000/feed')
        const project_info = await response.json()
        setProjects(project_info)
        console.log(projects)
    }
    fetch_and_set()
}, [projects]);

console.log(projects)

  return(
      <div>
        {projects.map((project) => (
          <div>
          <Feeds title= {project.title}  description = {project.description}></Feeds>
          <br></br>
          </div>
          ))}
      </div>
  );
}