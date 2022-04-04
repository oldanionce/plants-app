import React from 'react';
import CollectionCard from "../CollectionCard/CollectionCard";
import "./CollectionGrid.css";

export default function CollectionGrid({ plants }) {
    
	return (
    /* TODO: <div className={loading ? 'loaderContainer' : 'grid'}>
    <Loader></Loader> */     
		<div>
      <ul className="collectionGrid">
        {plants.map(plant => (
          <CollectionCard
            key={plant._id} 
            plant={plant} 
          ></CollectionCard>
        ))}
      </ul>
    </div>
    );
}