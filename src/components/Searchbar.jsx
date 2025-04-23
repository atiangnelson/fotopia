import React from 'react';

const Searchbar = ({searchPhotos, setSearchPhotos}) => {
  return (
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
  );
};

export default Searchbar;