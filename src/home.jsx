import DogFetcher from "../components/DogFetcher.jsx";

function Home() {
  return (
    <div className="page">
      <h1>Galería de Perros Aleatorios</h1>
      <p>Datos obtenidos en vivo desde la Dog CEO API.</p>

      {/* Integrante B: aquí se renderiza el componente que hace el fetch */}
      <DogFetcher />
    </div>
  );
}

export default Home;
