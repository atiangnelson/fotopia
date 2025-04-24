import React from 'react'

const Category = ({setSearchPhotos}) => {
    const category=["Nature","Cars","Art","Food","Animals","Transport","People","Technology"]
  return (
    <div>
        {category.map((category)=>{
            <button key={category} onClick={()=>setSearchPhotos(category)}>{category}</button>
        })}
    </div>
  )
}

export default Category