import React from 'react'
const categories=["Nature","Cars","Art","Food","Animals","Transport","People","Technology","Landscapes","Cities"]
const Category = ({setSearchPhotos}) => {
   
  return (
    <div className='ctg'>
        {categories.map((category)=>(
            <button key={category} onClick={()=>setSearchPhotos(category)}className='category'>{category}</button>
        ))}
    </div>
  )
}

export default Category