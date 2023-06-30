import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg"
// import { ContextGlobal } from "./utils/global.context";



const Card = ({ name, username, id }) => {
  // const { theme } = useContext(ContextGlobal)
  

  const dentista = { //definimos un objeto
    id,
    name,
    username
  }

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentistas = JSON.parse(localStorage.getItem('odontologos') || '[]')

    const existingDentist = dentistas.find((d) => d.id === dentista.id);
    if (existingDentist) {
        alert(`error, ${dentista.name} ya se encuentra en tu lista de favoritos`)
        return;
    }
   
    dentistas.push(dentista)
    localStorage.setItem('odontologos',JSON.stringify(dentistas))
  }
  console.log('agregando un dentista' + ' ' + dentista.id);

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="imagen" src={img} alt="imagen-doctor" />
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>usuario: {username}</h3>
        <button onClick={addFav} className="favButton">Añadir a favoritos 🌟 </button>
    </div>
  );
};

export default Card;
