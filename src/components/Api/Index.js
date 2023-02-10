import axios from 'axios'

export const GetBlogData = async () => {
    const {data} = await axios.get("http://localhost:3000/people")
    return data;
}

export const GetBlogPost=async(index)=>{
    const {data}= await axios.get(`http://localhost:3000/people/${index}`)
    return data;    
}

export const UpdateBlogPost=async(index,obj)=>{
    const result=await axios.put(`http://localhost:3000/people/${index}`,obj)
    return result;
}


export const DeleteBlogPost=async(index)=>{
    const result=await axios.delete(`http://localhost:3000/people/${index}`)
    return result;
}