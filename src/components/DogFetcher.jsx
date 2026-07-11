import { useState, useEffect } from "react";
import DogCard from "./DogCard.jsx";

function DogFetcher() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/5"
        );
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        // data.message es un array de 5 URLs de imágenes
        setDogs(data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) return <p>Cargando perritos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <div className="dog-grid">
      {dogs.map((imageUrl, index) => (
        <DogCard
          key={index}
          id={index + 1}
          imagen={imageUrl}
          nombre={`Perrito #${index + 1}`}
        />
      ))}
    </div>
  );
}

export default DogFetcher;
