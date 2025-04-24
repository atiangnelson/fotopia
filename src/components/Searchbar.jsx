import React from 'react';
import logo from './assets/logo.jpg'

const Searchbar = ({searchPhotos, setSearchPhotos}) => {
  return (
    <>
    <div>
     <img src="{logo}" alt="logo" className='logo'/>
    </div>
    <div className="bar">

    <input
     type="text"
     placeholder="search photo"
     className="search"
     value={searchPhotos}
    onChange={(e) => setSearchPhotos(e.target.value)}
   />
   <button className="btn">
     <i class="fa-magnifying-glass"></i> 
    </button>    
    </div>
    </>
  );
};

export default Searchbar;