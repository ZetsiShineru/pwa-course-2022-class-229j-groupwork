import '../css/Avatar.css';
import React from 'react';

function Avatar(props) {
  const base64Image = props.base64Image;

  return (
    <div className="avatar">
      <img src={base64Image} alt={props.name}/>
    </div>
  );
}

export default Avatar;