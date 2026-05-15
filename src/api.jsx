import React, { useEffect, useState } from 'react'
import axios from 'axios';

const api = () => {

    const[data,setData]=useState([])

    const handleApi= async()=>{
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data)

    }

    useEffect(()=>{
handleApi()
    },[])
  return (
  <>
  {
    data.map((item)=>{
        return(
            <>
            <h1>{item.title}</h1>
            </>
        )
    })
  }
  
  </>
  )
}

export default api