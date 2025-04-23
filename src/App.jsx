import { useEffect, useState } from 'react'


function App() {
  const[photos,setPhotos]=useState([])
  const[searchPhotos,setSearchPhotos]=useState("")
  useEffect(()=>{
    let url=searchPhotos? `https://api.unsplash.com/search/photos?query=${searchPhotos}` : `https://api.unsplash.com/photos/random?count=100`
    fetch(url,)

  },[searchPhotos])

  return (
    <>
     
    </>
  )
}

export default App
