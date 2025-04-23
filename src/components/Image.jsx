import React from 'react'

const Image = ({photos}) => {
  return (
    <div className="gen">
            {photos.map((photo) => (
                <div key={photo.id}>
                    <img src={photo.urls.small} alt={photo.alt_description} className="img"/>
                    <h3>{photo.title}</h3>
                    <p>{photo.alt_description}</p>
                </div>
            )
        )}
        </div>
)}

export default Image