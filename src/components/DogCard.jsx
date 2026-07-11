function DogCard({ id, imagen, nombre }) {
  return (
    <div className="dog-card">
      <img src={imagen} alt={nombre} className="dog-img" />
      <p className="dog-name">
        {id}. {nombre}
      </p>
    </div>
  );
}

export default DogCard;
