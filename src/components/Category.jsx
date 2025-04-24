import React from 'react'
const categories=["Nature","Cars","Art","Food","Animals","Transport","People","Technology"]
const Category = ({setSearchPhotos}) => {
   
  return (
    <div>
        {categories.map((category)=>(
            <button key={category} onClick={()=>setSearchPhotos(category)}className='category'>{category}</button>
        ))}
    </div>
  )
}

export default Category