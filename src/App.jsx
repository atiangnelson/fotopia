import { useEffect, useState } from 'react'


function App() {
  const[photos,setPhotos]=useState([])
  const[searchPhotos,setSearchPhotos]=useState("")
  useEffect(()=>{
    let url=searchPhotos? `https://api.unsplash.com/search/photos?query=${searchPhotos}` : `https://api.unsplash.com/photos/random?count=100`
    fetch(url,{
      headers:{
        Authorization: "Client-ID NU7wvktMWp6YGOH7XNtjZvtIiQczFh82URz5bA6jPl0"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(searchPhotos)
        setPhotos(data.results)
      else
      setPhotos(data)
    })
    .catch((err)=>console.error("Error Fetching:",err))

  },[searchPhotos])

  return (
    <>
     
    </>
  )
}

export default App
