import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Gallery from "../components/Gallery";
import IconHeart from "../components/IconHeart";

const Home = () => {
  const { imagenes, setImagenes } = useContext(ApiContext);

  const handleLikeClick = (id) => {
    const imagenIndex = imagenes.findIndex((imagen) => imagen.id === id);
    if (imagenIndex !== -1) {
      const nuevasImagenes = [...imagenes];
      nuevasImagenes[imagenIndex] = {
        ...nuevasImagenes[imagenIndex],
        liked: !nuevasImagenes[imagenIndex].liked,
      };
      setImagenes(nuevasImagenes);
    }
  };

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <div className="textoHome">
        <p>
          Si estás interesado en alguna fotografía puedes darle like y guardarla
          en Favoritos.
        </p>
      </div>
      <Gallery>
        {imagenes.map((imagen) => (
          <div key={imagen.id} className="gallery-item">
            <img src={imagen.src.medium} alt={imagen.alt} />
            <IconHeart
              filled={imagen.liked}
              onClick={() => handleLikeClick(imagen.id)}
            />
          </div>
        ))}
      </Gallery>
    </div>
  );
};

export default Home;
