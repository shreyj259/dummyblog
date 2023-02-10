import { TextField,Box,Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { GetBlogPost, UpdateBlogPost } from './Api/Index';
import { useParams } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import Loader from './Loader';

const BlogEdit = () => {
    const [post,setPost]=useState()
    const [loading,setLoading]=useState(false);
    const {id}=useParams();

    const handleChange=(e,type)=>{
        let temp={...post}
        if(type==="title"){
            temp.title=e.target.value;
        }else if(type==="desc"){
            temp.description=e.target.value;
        }else{
            temp.authorName=e.target.value;
        }
        setPost(temp)
    }

    useEffect(()=>{
        setLoading(true)
        GetBlogPost(id).then(data=>{
            setPost(data)
            setLoading(false)
        }
            ).catch(()=>{
                alert("can't fetch the data")
                setLoading(false)
            })
    },[])

    const saveHandler=()=>{
        UpdateBlogPost(id,post).then(data=>{
            alert("data updated succesfully");
            GetBlogPost(id).then(data=>{
                setPost(data)
            }
                ).catch(()=>{
                    alert("can't update the data")
                })
        }).catch(err=>{
            alert("can't fetch the data")
        })
    }

  return (
    <>{post?loading?<Loader/>:<Box>
        <TextField sx={{width:"100%",m:1,marginTop:5}} value={post.title} onChange={(e)=>handleChange(e,"title")} variant="outlined"/> <br/>
        <TextField sx={{width:"100%",m:1}} multiline value={post.description} onChange={(e)=>handleChange(e,"desc")} variant="outlined"/> <br/>
        <TextField sx={{width:"100%",m:1}} value={post.authorName} onChange={(e)=>handleChange(e,"auth")} variant="outlined"/>  <br/>     
        <Button sx={{m:1,backgroundColor:"green"}} onClick={saveHandler} variant='contained'><SaveIcon/></Button>
   </Box>:null}
    </>
    
  )
}

export default BlogEdit