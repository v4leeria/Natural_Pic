import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import IconHeart from "../components/IconHeart";
import { Card } from "react-bootstrap";

const Favorites = () => {
  const { favoritos, eliminarFavorito } = useContext(ApiContext);

  const handleRemoveFavorite = (id) => {
    eliminarFavorito(id);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((imagen) => (
          <Card key={imagen.id}>
            <img src={imagen.src.medium} alt={imagen.alt} />
            <p>{imagen.photographer}</p>
            <IconHeart
              filled={true}
              onClick={() => handleRemoveFavorite(imagen.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
