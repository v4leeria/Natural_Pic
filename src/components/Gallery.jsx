import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import IconHeart from "./IconHeart";
import Card from "react-bootstrap/Card";

const Gallery = () => {
  const { imagenes, agregarFavorito } = useContext(ApiContext);

  const handleLike = (imagen) => {
    agregarFavorito(imagen);
  };

  return (
    <div className="galeria">
      {imagenes.map((imagen) => (
        <Card key={imagen.id} className="card">
          <img src={imagen.src.medium} alt={imagen.alt} />
          <p>{imagen.photographer}</p>
          <IconHeart filled={imagen.liked} onClick={() => handleLike(imagen)} />
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
