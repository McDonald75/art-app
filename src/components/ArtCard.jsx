import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from './context';

const ArtCard = ({ art }) => { 
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {refresh, setRefresh} = useContext(Context)
  const onEdit = (id)=>{
    navigate(`edit/${id}`)
  }
  const onDelete = (id)=>{
    fetch(`https://json-server-zd0r.onrender.com/arts/${id}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      alert(`art ${id} was deleted!`)
      setRefresh(true)
    })
    .catch(error => {
      alert(error.message)
    }).finally(()=>{
      setLoading(false)
    });
  }
  return(
  <div className="art-card">
    {/* <img src={art.image} alt={art.name} className="art-image" /> */}
    <div className='art-image'  style={{
      backgroundImage:'url("'+art.image+'")',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat'
    }}></div>
    <div className="art-details">
      <h3>{art.name}</h3>
      <p>Author: {art.author}</p>
      <p>Price: ${art.price}</p>
      <a href={art.image} target="_blank" rel="noopener noreferrer">
        View Full Image
      </a>
    </div>
    <div className="art-card-buttons">
      <button onClick={() => onEdit(art.id)}>Edit</button>
      <button onClick={() => onDelete(art.id)}>Delete</button>
    </div>
  </div>
  )
};

export default ArtCard;
