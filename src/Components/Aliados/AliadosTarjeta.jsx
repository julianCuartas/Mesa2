import React from "react";
import "../CSS/Aliados.css"

export default function AliadosTarjeta(props) {


    return (
        <div className="n-Aliados-Tarjeta">
            <img src={props.img} alt="" className="n-Aliados-img-nombre"/>
            <p>{props.nombre}</p>
        </div>

    )




}