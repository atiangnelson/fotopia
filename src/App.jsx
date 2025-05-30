import { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar'
import Image from './components/Image'
import Head from './components/Head'
import Category from './components/Category'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


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
    <Head/>
    <Navbar/>
    <Searchbar setSearchPhotos={setSearchPhotos} searchPhotos={searchPhotos}/>
    <Category setSearchPhotos={setSearchPhotos}/>
    <Image photos={photos}/>
     <Footer/>
    </>
  )
}

export default App
