import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

const PHOTO_URL = "/photos.json?url";

export const ApiContextProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const res = await fetch(PHOTO_URL);
        const data = await res.json();
        setImagenes(data.photos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    obtenerImagenes();
  }, []);

  const agregarFavorito = (imagen) => {
    setFavoritos([...favoritos, imagen]);
  };
  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter((imagen) => imagen.id !== id);
    setFavoritos(nuevosFavoritos);
  };
  return (
    <ApiContext.Provider
      value={{ imagenes, agregarFavorito, favoritos, eliminarFavorito }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
