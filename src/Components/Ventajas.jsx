import React from "react";
import "./CSS/Ventajas.css"
import ItemVentaja from "./itemVentaja"
import educacion from "../Assets/Educacion.svg"
import rueda from "../Assets/Rueda.svg"
import aliados from "../Assets/Aliados.svg"
import concursos from  "../Assets/Concursos.svg"

export default function Ventajas() {



    return (

        <div className="n-ventajas" id="Objetivo">

            <div className="n-ventajas-objetivos">
                <h3>NUESTRO OBJETIVO</h3>
                <p>Como mesa técnica enfocada hacia el café especial, buscamos visibilizar, posicionar
                    y fortalecer el café especial producido en todo el valle del cauca a nivel mundial.</p>
                <p>Damos una oportunidad para que pequeños productores muestren sus productos a compradores del Valle del Cauca.</p>
            </div>
            <h3>BENEFICIOS DE PERTENECER A LA MESA TECNICA</h3>
            <div className="n-ventajas-contenedor-tarjetas">
                <ItemVentaja
                    icono={educacion}
                    titulo="Educación"
                    descripcion="Misiones educativas bimensuales a la escuela nacional del café y Tecnicafé, exclusivo para miembros registrados."
                />
                <ItemVentaja
                    icono={rueda}
                    titulo="Rueda de negocios"
                    descripcion="Podrás participar como productor en nuestra rueda  negocios."
                />
                 <ItemVentaja
                    icono={aliados}
                    titulo="Aliados estratégicos"
                    descripcion="Disfruta de beneficios exclusivos para miembros registrados."
                />
                 <ItemVentaja
                    icono={concursos}
                    titulo="Concursos de café"
                    descripcion="En nuestros concursos de café en pergamino potenciamos la producción de cafés del valle."
                />
            </div>

        </div>



    )




}