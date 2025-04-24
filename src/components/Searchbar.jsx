import React from 'react';
import logo from './assets/logo.jpg'

const Searchbar = ({searchPhotos, setSearchPhotos}) => {
  return (
   
    <div className="bar">
<img src={logo} alt="logo" className='logo'/>
    <input
     type="text"
     placeholder="search photo"
     className="search"
     value={searchPhotos}
    onChange={(e) => setSearchPhotos(e.target.value)}
    
   />
   <button className="btn">
     search
    </button>    
    </div>
    
  );
};

export default Searchbar;