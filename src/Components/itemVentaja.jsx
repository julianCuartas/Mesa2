import React from "react";
import "./CSS/Ventajas.css";

export default function ItemVentaja(props) {


    return (

        <div className="n-ventajas-tarjetas">
            <img src={props.icono} alt="" className="n-ventas-iconos"/>
            <h4>{props.titulo}</h4>
            <p>{props.descripcion}</p>
        </div>

    )



}