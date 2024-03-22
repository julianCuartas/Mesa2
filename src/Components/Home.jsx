import React from "react";
import "./CSS/Home.css"

function Home() {
  return (
    <div className="container-home">
      
      <div className="container-tittle">
        <h1>Mesa técnica de cafés especiales del valle del cauca</h1>
        <p className="text-tittle">¡El Valle también es café!</p>
      </div>
      <div className="container-subtittle">
        <div>
          <p className="text-tittle">+15</p>
          <p className="text-subtittle">Aliados comerciales</p>
        </div>
        <div>
          <p className="text-tittle">+150</p>
          <p className="text-subtittle">Miembros</p>
        </div>
        <div>
          <p className="text-tittle">+5</p>
          <p className="text-subtittle">Municipios visitados</p>
        </div>
      </div>
    </div>
  )
}

export default Home