import "./card.styles.css";

const Card = ({ kitty }) => {
  const { id, name, email } = kitty;

  return (
    <div className="card-container">
      <img
        alt={`Kitty ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
