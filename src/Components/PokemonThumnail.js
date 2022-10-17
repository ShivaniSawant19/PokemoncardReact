import React, { useState } from "react";

const PokemonThumbnail = ({
id,
name,
image
}) => {
const style = `thumb-container ${type}`;
return (
	<div className={style}>
	<div className="number">
		<small>#00{id}</small><br/>
        <small>{name}</small>
	</div>
	<img src={image} alt={name} />
	
	</div>
);
};

export default PokemonThumbnail;
