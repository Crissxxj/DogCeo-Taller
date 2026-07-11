function About() {
  return (
    <div className="page">
      <h1>Acerca del Proyecto</h1>
      <p>
        Este proyecto es un MVP desarrollado con React + Vite que consume la{" "}
        <strong>Dog CEO API</strong> (https://dog.ceo/api/breeds/image/random/5)
        para mostrar una galería de imágenes de perros aleatorios.
      </p>
      <ul>
        <li>React Router para la navegación entre páginas.</li>
        <li>useEffect + fetch para el consumo asíncrono de datos.</li>
        <li>Componentes reutilizables (padre/hijo) con Props.</li>
      </ul>
    </div>
  );
}

export default About;