import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom'


const BlogPrew = ({id,title,description,authorName,handleDelete}) => {
  return (
    <Paper sx={{width:"100%",my:3,p:2}}>
        <Typography sx={{fontSize:"22px",borderBottom:"1px solid grey",paddingY:1}}>
            {title}
        </Typography>

        <Typography sx={{paddingY:1}}>
            {description.slice(0,280) + "......"}
        </Typography>

        <Typography sx={{textAlign:"right"}}>
           { "-" + authorName}
        </Typography>
        <Box sx={{width:"100%",textAlign:"right",marginTop:1}}>
            <Link to={`/blog/${id}`}>
            <Button variant='contained'> 
                <AssignmentIcon/>
            </Button>
            </Link>

            <Link to={`/blog/edit/${id}`}>
            <Button sx={{mx:2}} variant='contained'>
                <EditIcon/>
            </Button>
            </Link>

            <Button onClick={()=>handleDelete(id)} variant='contained' >
                <DeleteIcon/>
            </Button>
        </Box>
    </Paper>
  )
}

export default BlogPrew